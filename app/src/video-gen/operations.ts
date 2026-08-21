import { VideoProject } from 'wasp/entities';
import { GenerateScript, CreateVideoProject, GetVideoProjects } from 'wasp/server/operations';
import { HttpError } from 'wasp/server';
import { renderVideoJob } from 'wasp/server/jobs';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Note: must be set in .env.server
});

export const generateScript: GenerateScript<
  { topic: string; tone: string; length: string },
  { script: string }
> = async ({ topic, tone, length }, context) => {
  if (!context.user) {
    throw new HttpError(401, 'User must be authenticated');
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: "You are a creative scriptwriter. Write a 2-person dialogue script for a short-form video. Do not include stage directions, just [Person A]: text and [Person B]: text."
        },
        {
          role: "user",
          content: `Write a script about ${topic}. The tone should be ${tone}. The length should be approximately ${length}.`
        }
      ],
      temperature: 0.7,
    });

    const script = response.choices[0].message?.content || 'Failed to generate script';
    return { script };
  } catch (error: any) {
    console.error("OpenAI Error:", error);
    throw new HttpError(500, 'Failed to generate script with AI');
  }
};

export const createVideoProject: CreateVideoProject<
  { title: string; type: string; script: string; voiceId: string; backgroundUrl: string },
  VideoProject
> = async (args, context) => {
  if (!context.user) {
    throw new HttpError(401, 'User must be authenticated');
  }

  // Deduct credits if necessary
  if (context.user.credits <= 0) {
    throw new HttpError(403, 'Not enough credits');
  }

  await context.entities.User.update({
    where: { id: context.user.id },
    data: { credits: context.user.credits - 1 },
  });

  const project = await context.entities.VideoProject.create({
    data: {
      userId: context.user.id,
      title: args.title,
      type: args.type,
      script: args.script,
      voiceId: args.voiceId,
      backgroundUrl: args.backgroundUrl,
      status: 'PROCESSING',
    },
  });

  // Dispatch background Wasp Job here to process the video using Remotion or FFmpeg.
  await renderVideoJob.submit({ projectId: project.id });

  return project;
};

export const getVideoProjects: GetVideoProjects<void, VideoProject[]> = async (_args, context) => {
  if (!context.user) {
    throw new HttpError(401, 'User must be authenticated');
  }

  return context.entities.VideoProject.findMany({
    where: { userId: context.user.id },
    orderBy: { createdAt: 'desc' },
  });
};
