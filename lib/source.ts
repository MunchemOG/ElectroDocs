import { docs } from '@/.source';
import { loader } from 'fumadocs-core/source';
import { type InferPageType } from 'fumadocs-core/source';
import { brand } from '@/lib/brand';
import { createElement } from 'react';
import { icons } from 'lucide-react';

// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
  // it assigns a URL to your pages
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
  // `icon: BatteryCharging` in a page's frontmatter puts that Lucide icon in the sidebar.
  // Each ElectroDromos feature page has one, so new features slot into the same system.
  icon(name) {
    if (name && name in icons) return createElement(icons[name as keyof typeof icons]);
  },
});


export function getPageImage(page: InferPageType<typeof source>) {
  const segments = [...page.slugs, 'image.png'];
  return {
    segments,
    url: `${brand.url}/og/docs/${segments.join('/')}`,
  };
}
