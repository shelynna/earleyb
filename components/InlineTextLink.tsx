import Link, {type LinkProps} from 'next/link';
import {Link2} from 'lucide-react';
import type {ReactNode} from 'react';
import {cn} from '@/lib/utils';

type InlineTextLinkProps = LinkProps & {
  children: ReactNode;
  className?: string;
  iconClassName?: string;
};

export function InlineTextLink({
  children,
  className,
  iconClassName,
  ...props
}: InlineTextLinkProps) {
  return (
    <Link
      {...props}
      className={cn(
        'inline-flex items-center gap-1.5 align-baseline transition-colors',
        className,
      )}
    >
      <Link2 className={cn('h-3.5 w-3.5 shrink-0', iconClassName)} aria-hidden="true" />
      <span className="min-w-0">{children}</span>
    </Link>
  );
}
