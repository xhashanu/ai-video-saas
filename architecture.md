# AI Video SaaS Architecture

## Overview
The AI Video SaaS is a scalable web application built on top of the **Open SaaS** boilerplate. It allows users to generate faceless videos, starting with a "Text Story" workflow. Users input a topic, AI generates a script, and the system renders a video with text-to-speech voiceovers over background gameplay footage.

## Tech Stack
- **Framework**: [Wasp](https://wasp-lang.dev/) (v0.14/v0.15+) - A declarative full-stack framework bridging React and Node.js.
- **Frontend**: React, Tailwind CSS, Radix UI.
- **Backend**: Node.js, Express (via Wasp).
- **Database**: PostgreSQL with Prisma ORM.
- **Payments**: Stripe or LemonSqueezy (pre-configured via Open SaaS).
- **Authentication**: Email/Password + Social Auth (Google, GitHub) via Wasp Auth.
- **AI Integrations**: OpenAI API (Script Generation), ElevenLabs/OpenAI TTS (Voiceovers).
- **Video Rendering**: (Planned) Remotion or FFmpeg in Wasp Background Jobs.

## Core Models (Database)

### `User`
- Handles authentication and billing.
- Tracks `credits` (default: 3). One credit is deducted per video generation.
- Relates one-to-many to `VideoProject`.

### `VideoProject`
- Represents a single video generation request.
- **Fields**:
  - `title`, `type` ('TEXT_STORY')
  - `status`: 'DRAFT', 'PROCESSING', 'COMPLETED', 'FAILED'
  - `script`: The AI-generated script string.
  - `voiceId`: Selected text-to-speech voice model.
  - `backgroundUrl`: The background gameplay footage selected by the user.
  - `finalVideoUrl`: The S3 or public URL of the final rendered video.

## Application Structure (Wasp Domains)

### `video-gen` Domain (`app/src/video-gen`)
This is the core business logic domain for the application.

#### **Frontend (`DashboardPage.tsx`, `CreateTextStoryPage.tsx`)**
1. **Dashboard**: Lists the user's `VideoProject` history, showing statuses (PROCESSING, COMPLETED).
2. **Create Flow**: A multi-step React component where users:
   - Input a topic to generate a script via OpenAI.
   - Select their preferred voice and background video.
   - Submit the project.

#### **Backend (`operations.ts`)**
- `generateScript` (Action): Authenticated endpoint. Currently returns a mocked script. **TODO**: Integrate OpenAI API here.
- `createVideoProject` (Action):
  1. Checks if the user has `> 0` credits.
  2. Deducts 1 credit.
  3. Creates a `VideoProject` record in the database with status `PROCESSING`.
  4. **TODO**: Dispatches a Wasp Background Job to actually render the video.
- `getVideoProjects` (Query): Retrieves projects associated with the authenticated user.

## Video Rendering Pipeline (Next Steps)
To complete the MVP, a background rendering pipeline must be implemented:
1. **Define Wasp Job**: Add a job to `video-gen.wasp.ts` (e.g., `job renderVideoJob { executor: PgBoss, perform: { fn: import { renderVideo } from "@src/video-gen/jobs" } }`).
2. **Text-to-Speech (TTS)**: The job will call ElevenLabs or OpenAI TTS to convert the `script` into an audio file.
3. **Audio Alignment**: (Optional but recommended) Generate timestamps for words to animate captions on screen.
4. **Video Assembly**: 
   - Option A: Use **FFmpeg** to overlay the audio and draw text onto the selected `backgroundUrl`.
   - Option B: Use **Remotion** to render a React composition into an MP4 file.
5. **Storage**: Upload the final `.mp4` to AWS S3 (using Wasp's existing S3 utils in the boilerplate).
6. **Completion**: Update the `VideoProject` status to `COMPLETED` and set the `finalVideoUrl`.

## Development Workflow
- **Database**: Run `wasp start db` to spin up PostgreSQL via Docker.
- **Migrations**: Run `wasp db migrate-dev` whenever `schema.prisma` is modified.
- **Local Dev**: Run `wasp start` to run both the frontend and backend servers.

## Design Philosophy
- **Modular Domains**: Keep business logic separated into feature domains (e.g., `video-gen`, `payment`, `auth`).
- **Background Processing**: Video generation is slow. Always immediately return a `PROCESSING` state to the client and perform heavy lifting in `pg-boss` queues.
- **Fail-Safes**: Always handle job failures by updating the project status to `FAILED` and refunding user credits if necessary.
