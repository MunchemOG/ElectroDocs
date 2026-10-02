import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, BatteryCharging, Cog, Gauge, Timer } from "lucide-react";
import type { ReactNode } from "react";
import { brand, githubUrl } from "@/lib/brand";
import SignalStrip from "@/components/SignalStrip";
import { dromosThemes } from "@/lib/code-theme";
import TypedHeading from "./TypedHeading";

export const metadata: Metadata = {
  title: brand.name,
  description: "Battery-proof Pedro Pathing for FTC.",
  openGraph: {
    url: brand.url,
    images: [
      {
        url: `${brand.url}/og-banner.png`,
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  }
};

const code = `// Pedro Pathing's follower, with ElectroDromos on top
public static Follower create(HardwareMap h) {
  Dromos dromos = new Dromos(h, dromosConfig);
  return new Follower(
    dromos.localizer(new PinpointLocalizer(h, localizerConfig)),
    dromos.drivetrain(new Mecanum(h, drivetrainConfig)),
    new Foresight(foresightConfig)
  );
}

follower.follow(cycle);  // same Pedro path, any battery`;

// One row per feature; a new feature is a new row.
const features: { icon: ReactNode; name: string; line: string; href: string }[] = [
  {
    icon: <BatteryCharging />,
    name: "Voltage compensation",
    line: "Path following and holding scaled to the battery, never your sticks.",
    href: "/docs/pathing/reference/voltage-compensation",
  },
  {
    icon: <Gauge />,
    name: "Voltage Compensation Tuner",
    line: "An AutoTune procedure that finds nominalVoltage for you.",
    href: "/docs/pathing/reference/voltage-tuner",
  },
  {
    icon: <Timer />,
    name: "Loop timer",
    line: "Loop Hz and worst loop time for about 50 ns a loop.",
    href: "/docs/pathing/reference/loop-timer",
  },
  {
    icon: <Cog />,
    name: "DromosMotor",
    line: "Mechanism motors that skip hub writes that change nothing.",
    href: "/docs/pathing/reference/dromos-motor",
  },
];

function Actions({ className }: { className: string }) {
  return (
    <div className={`flex-wrap gap-3 ${className}`}>
      <Link href="/docs/pathing/installation"
        className="flex items-center justify-center gap-2 font-semibold bg-fd-primary text-fd-primary-foreground hover:brightness-110 transition h-11 px-6 rounded-full">
        Get Started <ArrowRight className="size-4" />
      </Link>
      <a href={githubUrl} target="_blank" rel="noreferrer"
        className="flex gap-2 items-center justify-center font-medium border border-fd-border hover:border-fd-primary hover:text-fd-primary transition-colors h-11 px-6 rounded-full">
        <svg className="size-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path fill="currentColor"
            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
        GitHub
      </a>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="flex w-full min-w-0 flex-col items-center px-4 sm:px-6">
      <div className="w-full min-w-0 max-w-5xl pt-14 pb-24">
        <div className="flex flex-col items-center">
          <img className="dromos-wordmark-dark w-full max-w-md md:max-w-xl mb-14" src={`${process.env.BASE_PATH}/logo-wordmark.svg`} alt={brand.name} />
          <img className="dromos-wordmark-light w-full max-w-md md:max-w-xl mb-14" src={`${process.env.BASE_PATH}/logo-wordmark-light.svg`} alt={brand.name} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="min-w-0">
            <TypedHeading />
            <p className="mt-4 text-lg text-fd-muted-foreground leading-relaxed max-w-prose">
              {brand.name} is an add-on for Pedro Pathing. You keep Pedro's follower, paths and tune; it adds voltage compensation, a loop timer and write-caching mechanism motors on top.
            </p>
            <p className="mt-3 text-fd-muted-foreground leading-relaxed">
              Two lines in your Constants. Pedro's tune stays valid.
            </p>
            <Actions className="hidden lg:flex mt-8" />
          </div>
          <div className="min-w-0">
            <DynamicCodeBlock lang="java" code={code} options={dromosThemes} />
          </div>
        </div>
        <Actions className="flex lg:hidden mt-8" />

        <section className="mt-20" aria-label="Voltage compensation illustrated">
          <SignalStrip />
        </section>

        <section className="mt-20">
          <h2 className="font-display text-2xl font-bold">What ElectroDromos adds</h2>
          <ul className="mt-6 divide-y divide-fd-border border-y border-fd-border">
            {features.map((f) => (
              <li key={f.href}>
                <Link href={f.href}
                  className="group grid grid-cols-[2.5rem_1fr_auto] items-center gap-4 py-4 px-1 transition-colors hover:bg-fd-accent/40">
                  <span className="text-fd-primary [&>svg]:size-6" aria-hidden>{f.icon}</span>
                  <span className="min-w-0">
                    <span className="block font-display font-semibold text-lg group-hover:text-fd-primary transition-colors">{f.name}</span>
                    <span className="block text-fd-muted-foreground">{f.line}</span>
                  </span>
                  <ArrowRight className="size-5 text-fd-muted-foreground transition-transform duration-200 group-hover:translate-x-1 group-hover:text-fd-primary" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-fd-muted-foreground">
            Built on <a className="underline underline-offset-4 hover:text-fd-primary" href="https://pedropathing.com">Pedro Pathing</a> by the Pedro Pathing team.
            {" "}{brand.name} is made by ElectroLights 30686 and isn't affiliated with Pedro Pathing.
          </p>
        </section>
      </div>
    </main>
  );
}
