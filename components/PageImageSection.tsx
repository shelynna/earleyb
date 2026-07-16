import {ManagedImage} from '@/components/ManagedImage';
import type {SiteImage} from '@/lib/site-images';

type PageImageSectionProps = {
  image: SiteImage;
  eyebrow?: string;
  title: string;
  body: string;
  reverse?: boolean;
};

export function PageImageSection({
  image,
  eyebrow,
  title,
  body,
  reverse = false,
}: PageImageSectionProps) {
  return (
    <section className="px-4 py-10 md:px-10 md:py-16 max-w-[1440px] mx-auto">
      <article className="page-image-section group grid overflow-hidden rounded-[32px] bg-white p-3 md:p-4 lg:grid-cols-[1.12fr_0.88fr] lg:items-stretch">
        <div
          className={`relative flex min-h-[260px] items-center justify-center overflow-hidden rounded-[24px] bg-soft-card md:min-h-[380px] ${
            reverse ? 'lg:col-start-2 lg:row-start-1' : ''
          }`}
        >
          <ManagedImage
            image={image}
            fill
            sizes="(min-width: 1024px) 760px, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            fallbackLabel={image.alt || 'Page image'}
          />
        </div>

        <div
          className={`flex flex-col justify-center p-5 md:p-8 lg:p-10 ${
            reverse ? 'lg:col-start-1 lg:row-start-1' : ''
          }`}
        >
          {eyebrow ? (
            <span className="mb-4 text-[10px] font-bold uppercase tracking-widest text-action">
              {eyebrow}
            </span>
          ) : null}
          <h2 className="mb-5 text-3xl font-bold leading-tight text-black md:text-5xl">
            {title}
          </h2>
          <p className="text-base font-medium leading-relaxed text-gray-600 md:text-lg">
            {body}
          </p>
        </div>
      </article>
    </section>
  );
}
