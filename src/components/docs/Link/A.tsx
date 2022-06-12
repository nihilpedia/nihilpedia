import React, { useState } from 'react';
import { DocsLink } from '@/components/docs/Link/Docs';
import { ExternalLink } from '@/components/docs/Link/External';
import { TocLink } from '@/components/docs/Link/Toc';

interface IA {
  href: string;
  children: React.ReactNode;
  type?: ('page' | 'external' | 'toc')
}

export const A = ({
  href, children, type = 'page',
}: IA) => {
  const [ docSlugs, ] = useState<string[]>(
    typeof window !== 'undefined'
      ? JSON.parse(window.localStorage.getItem('docSlugs'))
      : []
  );

  return (
    <>
      {type === 'page' && (
        <DocsLink href={href} docSlugs={docSlugs}>{children}</DocsLink>
      )}
      {type === 'toc' && (
        <TocLink href={href}>{children}</TocLink>
      )}
      {type === 'external' && (
        <ExternalLink href={href}>{children}</ExternalLink>
      )}
    </>
  );
};
