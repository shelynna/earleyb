# EarleyBird Technology Solutions

A Next.js site for EarleyBird Technology Solutions, covering senior living tech concierge services, personal technology help, small business IT, web design, and client resources.

## Run Locally

Prerequisite: Node.js

1. Install dependencies:
   `npm install`
2. Start the development server:
   `npm run dev`
3. Open the local URL printed by Next.js.

## Updating Site Images

All site image paths live in [lib/site-images.ts](lib/site-images.ts). To swap an image:

1. Upload the replacement image to your image host.
2. Paste the full `https://...` image URL into the matching `src` field.
3. Update the matching `alt` text so the image stays accessible.

The app is configured to accept hosted images from any `https` domain. Blank `src` values intentionally show placeholders, which is useful for portfolio/client images that are not ready yet.

## Maintenance

- Lint the project: `npm run lint`
- Type-check the project: `npm run typecheck`
- Build for production: `npm run build`
- Run all checks: `npm run check`
- Remove generated artifacts that are safe to clear while developing: `npm run clean`
- Fully clear build output and dev logs after stopping the dev server: `npm run clean:all`
