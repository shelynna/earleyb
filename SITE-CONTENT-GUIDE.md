# Site Content Update Guide

Use these files for common site-wide updates:

- Contact info, business hours, and social links: `lib/site-config.ts`
- Page, service, portfolio, home, and blog images: `lib/site-images.ts`
- Logo file: `assets/images/logo.webp`

For image updates, add files to `assets/images`, import them at the top of `lib/site-images.ts`, then change the matching `src` and `alt` values.
You can also use a local path such as `/images/service-photo.jpg` for files in `public/images`, or use a full `https://` image URL.
For Pexels images, use the `pexelsPhoto(...)` helper so the direct image URL and the source page link stay together.

For social links, add, remove, or edit items in the `socialLinks` array in `lib/site-config.ts`.
