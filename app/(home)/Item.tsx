import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Item({ title, icon, iconClassName, description, href, link = false }: {
  title: string,
  icon: ReactNode,
  iconClassName: string,
  description: string,
  href: string,
  link?: boolean,
}) {
  const Component = link ? Link : "a";

  return (
    <Component href={href}
      className="group my-4 xl:my-0 block xl:basis-0 xl:grow min-w-0 p-6 bg-fd-card border border-fd-border rounded-2xl transition-[border-color,transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-fd-primary hover:shadow-[0_12px_32px_-16px_rgb(0_0_0/0.6)]">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 min-w-0">
          <div className={`rounded-xl size-12 p-2.5 border-2 shrink-0 ${iconClassName}`}>
            {icon}
          </div>
          <span className="font-display font-semibold text-fd-foreground text-xl">{title}</span>
        </div>
        <ArrowUpRight
          className="shrink-0 size-6 text-fd-muted-foreground transition-[color,transform] duration-300 group-hover:text-fd-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
      </div>
      <p className="text-fd-muted-foreground mt-4">{description}</p>
    </Component>
  )
}
