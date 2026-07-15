import Image from 'next/image';
import logo from '@/assets/images/logo.webp';

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

export function BrandLogo({className = 'h-12 w-auto', priority = false}: BrandLogoProps) {
  return (
    <Image
      src={logo}
      alt="EarleyBird Technology Solutions"
      className={className}
      priority={priority}
      sizes="(min-width: 1024px) 180px, 150px"
    />
  );
}
