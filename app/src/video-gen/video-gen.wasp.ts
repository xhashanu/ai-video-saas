import { action, page, query, route, job, type Spec } from "@wasp.sh/spec";

import { DashboardPage } from "./DashboardPage" with { type: "ref" };
import { CreateTextStoryPage } from "./CreateTextStoryPage" with { type: "ref" };
import { CreateVideoCommentaryPage } from "./CreateVideoCommentaryPage" with { type: "ref" };
import { CreateVideoRankingPage } from "./CreateVideoRankingPage" with { type: "ref" };
import { CreateAutoClippingPage } from "./CreateAutoClippingPage" with { type: "ref" };
import { VideoStoryPage } from "./VideoStoryPage" with { type: "ref" };
import { SplitScreenPage } from "./SplitScreenPage" with { type: "ref" };
import { SimpleEditorPage } from "./SimpleEditorPage" with { type: "ref" };
import { GenerateVoiceoverPage } from "./GenerateVoiceoverPage" with { type: "ref" };
import { VideoTranscriberPage } from "./VideoTranscriberPage" with { type: "ref" };
import { AiImageGeneratorPage } from "./AiImageGeneratorPage" with { type: "ref" };
import { AiVideoGeneratorPage } from "./AiVideoGeneratorPage" with { type: "ref" };
import { VideoDownloaderPage } from "./VideoDownloaderPage" with { type: "ref" };
import { LibraryPage } from "./LibraryPage" with { type: "ref" };
import { TutorialPage } from "./TutorialPage" with { type: "ref" };
import { FreeCoursePage } from "./FreeCoursePage" with { type: "ref" };

import {
  generateScript,
  createVideoProject,
  getVideoProjects,
} from "./operations" with { type: "ref" };

import { renderVideoJob } from "./jobs" with { type: "ref" };

export const videoGenSpec: Spec = [
  route("DashboardRoute", "/dashboard", page(DashboardPage, { authRequired: true })),
  route("CreateTextStoryRoute", "/create/text-story", page(CreateTextStoryPage, { authRequired: true })),
  route("CreateVideoCommentaryRoute", "/create/video-commentary", page(CreateVideoCommentaryPage, { authRequired: true })),
  route("CreateVideoRankingRoute", "/create/video-ranking", page(CreateVideoRankingPage, { authRequired: true })),
  route("CreateAutoClippingRoute", "/create/auto-clipping", page(CreateAutoClippingPage, { authRequired: true })),
  route("VideoStoryRoute", "/create/video-story", page(VideoStoryPage, { authRequired: true })),
  route("SplitScreenRoute", "/create/split-screen", page(SplitScreenPage, { authRequired: true })),
  route("SimpleEditorRoute", "/create/simple-editor", page(SimpleEditorPage, { authRequired: true })),
  route("GenerateVoiceoverRoute", "/create/generate-voiceover", page(GenerateVoiceoverPage, { authRequired: true })),
  route("VideoTranscriberRoute", "/create/video-transcriber", page(VideoTranscriberPage, { authRequired: true })),
  route("AiImageGeneratorRoute", "/create/ai-image-generator", page(AiImageGeneratorPage, { authRequired: true })),
  route("AiVideoGeneratorRoute", "/create/ai-video-generator", page(AiVideoGeneratorPage, { authRequired: true })),
  route("VideoDownloaderRoute", "/create/video-downloader", page(VideoDownloaderPage, { authRequired: true })),
  route("LibraryRoute", "/library", page(LibraryPage, { authRequired: true })),
  route("TutorialRoute", "/tutorial", page(TutorialPage, { authRequired: true })),
  route("FreeCourseRoute", "/free-course", page(FreeCoursePage, { authRequired: true })),

  query(getVideoProjects, { entities: ["User", "VideoProject"] }),
  action(generateScript, { entities: ["User"] }),
  action(createVideoProject, { entities: ["User", "VideoProject"] }),

  job(renderVideoJob, {
    executor: "PgBoss",
    entities: ["VideoProject"],
  }),
];
