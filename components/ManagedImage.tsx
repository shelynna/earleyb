import Image, {type ImageProps} from 'next/image';
import type {ReactNode} from 'react';
import type {SiteImage} from '@/lib/site-images';

type ManagedImageProps = Omit<ImageProps, 'src' | 'alt' | 'referrerPolicy'> & {
  image: SiteImage;
  fallback?: ReactNode;
  fallbackLabel?: string;
};

export function ManagedImage({
  image,
  fallback,
  fallbackLabel = 'Image',
  ...props
}: ManagedImageProps) {
  if (!image.src) {
    return (
      fallback ?? (
        <span className="text-gray-400 font-medium">{fallbackLabel}</span>
      )
    );
  }

  return (
    <Image
      {...props}
      src={image.src}
      alt={image.alt}
      referrerPolicy={image.referrerPolicy}
    />
  );
}
