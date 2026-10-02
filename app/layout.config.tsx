import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { githubUrl } from "@/lib/brand";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <img className="size-7" src={`${process.env.BASE_PATH}/logo-mark-transparent.svg`} alt="" />
        <span className="font-display font-bold italic tracking-wide uppercase">
          Electro<span className="text-fd-primary">Dromos</span>
        </span>
      </>
    ),
  },
  // see https://fumadocs.dev/docs/ui/navigation/links
  links: [],
  githubUrl
};
