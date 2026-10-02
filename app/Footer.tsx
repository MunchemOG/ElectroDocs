import { brand, githubUrl } from "@/lib/brand";

export function Footer({ className }: { className?: string }) {
  return (
    <footer className={`mt-auto border-t border-fd-border py-6 px-6 text-sm text-fd-muted-foreground ${className ?? ''}`}>
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-center">
        <span>&copy; 2026 {brand.name} · Made by ElectroLights 30686</span>
        <span>Built on <a className="hover:text-fd-primary underline-offset-4 hover:underline" href="https://pedropathing.com">Pedro Pathing</a></span>
        <a className="hover:text-fd-primary underline-offset-4 hover:underline" href={`mailto:${brand.email}`}>{brand.email}</a>
        <a className="hover:text-fd-primary underline-offset-4 hover:underline" href={githubUrl}>GitHub</a>
      </div>
    </footer>
  );
}
