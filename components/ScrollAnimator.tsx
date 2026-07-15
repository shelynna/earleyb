'use client';

import {useEffect} from 'react';
import {usePathname} from 'next/navigation';

type AnimationTarget = {
  selector: string;
  variant: 'text' | 'copy' | 'card' | 'button';
};

const animationTargets: AnimationTarget[] = [
  {
    selector: 'main h1, main h2, main h3',
    variant: 'text',
  },
  {
    selector: 'main p, main li',
    variant: 'copy',
  },
  {
    selector:
      'main div[class*="bg-white"][class*="rounded"], main div[class*="bg-panel-bg"][class*="rounded"], main div[class*="bg-soft-card"][class*="rounded"], main a[class*="bg-white"][class*="rounded"], main article',
    variant: 'card',
  },
  {
    selector:
      'main a[class*="font-bold"][class*="uppercase"], main button[class*="font-bold"][class*="uppercase"]',
    variant: 'button',
  },
];

export function ScrollAnimator() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const observed = new Set<HTMLElement>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('is-visible', entry.isIntersecting);
        });
      },
      {
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.12,
      },
    );

    animationTargets.forEach(({selector, variant}) => {
      document.querySelectorAll<HTMLElement>(selector).forEach((element, index) => {
        if (observed.has(element) || element.closest('header, footer')) {
          return;
        }

        observed.add(element);
        element.dataset.scrollAnimate = variant;
        element.style.setProperty('--scroll-delay', `${Math.min(index % 6, 5) * 45}ms`);
        observer.observe(element);
      });
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
