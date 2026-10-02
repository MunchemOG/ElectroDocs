'use client';
import {useEffect, useState} from "react";
import Row from "@/app/(home)/Row";
import Item from "@/app/(home)/Item";
import {BookOpen, Leaf, Moon, Route, Sun} from "lucide-react";
import {SiGithub} from "@icons-pack/react-simple-icons";
import {Footer} from "@/app/Footer";
import {useTheme} from "next-themes";
import {brand, githubUrl} from "@/lib/brand";

export default function HomeSelector() {
    const [mounted, setMounted] = useState(false);
    const {resolvedTheme, setTheme} = useTheme();
    useEffect(() => setMounted(true), []);
    const dark = resolvedTheme !== 'light';

    return (
        <>
            <button
                onClick={() => setTheme(dark ? 'light' : 'dark')}
                aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
                className="fixed top-4 left-4 z-50 p-2 rounded-full border border-fd-border bg-fd-card text-fd-muted-foreground hover:text-fd-primary hover:border-fd-primary transition-colors"
            >
                {mounted && (dark ? <Sun className="size-5"/> : <Moon className="size-5"/>)}
            </button>

            <header className="mx-auto mt-24 mb-6 w-full max-w-2xl px-6 text-center">
                <img src={`${process.env.BASE_PATH}/${dark ? 'logo-wordmark.svg' : 'logo-wordmark-light.svg'}`}
                     alt={brand.name} draggable="false" className="mx-auto w-full max-w-xl"/>
                <p className="mt-6 text-lg text-fd-muted-foreground">
                    Battery-proof Pedro Pathing for FTC.
                </p>
            </header>

            <main className="p-6 xl:p-8">
                <Row>
                    <Item link href="/docs"
                          title="Docs"
                          iconClassName="border-dromos-signal text-dromos-signal"
                          description="Install ElectroDromos, reference and guides"
                          icon={<BookOpen className="size-full"/>}/>
                    <Item href="https://pedropathing.com"
                          title="Pedro Pathing"
                          iconClassName="border-fd-border text-fd-foreground"
                          description="The path follower ElectroDromos builds on"
                          icon={<Route className="size-full"/>}/>
                    <Item link href="/docs/ivy"
                          title="Ivy"
                          iconClassName="border-fd-border text-fd-foreground"
                          description="Pedro's command framework"
                          icon={<Leaf className="size-full"/>}/>
                    <Item href={githubUrl}
                          title="GitHub"
                          iconClassName="border-fd-border text-fd-foreground"
                          description="Source and issues"
                          icon={<SiGithub className="size-full"/>}/>
                </Row>
            </main>

            <Footer/>
        </>
    )
}
