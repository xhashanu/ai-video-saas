import { VideoProject } from 'wasp/entities';
import { GenerateScript, CreateVideoProject, GetVideoProjects } from 'wasp/server/operations';
import { HttpError } from 'wasp/server';

export const generateScript: GenerateScript<
  { topic: string; tone: string; length: string },
  { script: string }
> = async ({ topic, tone, length }, context) => {
  if (!context.user) {
    throw new HttpError(401, 'User must be authenticated');
  }

  // TODO: Call OpenAI API here. For now, return a mock script.
  // In a real app, you would use OpenAI SDK here.
  const mockScript = `[Person A]: Did you hear about ${topic}?\n[Person B]: Yeah, it's wild! Tell me more in a ${tone} way.\n[Person A]: Well, here is a ${length} summary...`;
  
  return { script: mockScript };
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

  // TODO: Dispatch a background Wasp Job here to process the video using Remotion or FFmpeg.

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
