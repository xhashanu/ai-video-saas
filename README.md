# <YOUR_APP_NAME>

This project is based on [Open Saas](https://opensaas.sh) template and consists of three main dirs:

1. `app` - Your web app, built with [Wasp](https://wasp.sh).
2. `e2e-tests` - [Playwright](https://playwright.dev/) tests for your Wasp web app.
3. `blog` - Your blog / docs, built with [Astro](https://docs.astro.build) based on [Starlight](https://starlight.astro.build/) template.

For more details, check READMEs of each respective directory!

## Deployment

Because this app is built with Wasp, you have several ways to deploy:

### Option 1: Fly.io (Easiest)
Wasp provides built-in support for deploying to Fly.io.
1. Install the Fly CLI and log in: `flyctl auth login`
2. Run the deploy command from the `app/` directory:
   ```bash
   cd app
   wasp deploy fly launch my-ai-video-saas-db
   wasp deploy fly deploy
   ```

### Option 2: Any Docker-compatible host (AWS, Render, DigitalOcean, etc.)
Wasp generates a standard Dockerfile for you.
1. Build your app using: `wasp build`
2. This creates a `.wasp/build/` directory containing a `Dockerfile`.
3. Use that Dockerfile to build and deploy your image to your preferred hosting provider.
