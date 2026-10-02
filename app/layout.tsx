import './global.css';
import {Barlow, Chakra_Petch} from 'next/font/google';
import type {ReactNode} from 'react';
import {Provider} from "@/app/provider";
import 'katex/dist/katex.css';
import {Metadata} from "next";

// Chakra Petch sets the wordmark and headings; Barlow carries the reading text.
const chakra = Chakra_Petch({
    subsets: ['latin'],
    weight: ['600', '700'],
    style: ['normal', 'italic'],
    variable: '--font-chakra',
});

const barlow = Barlow({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
    variable: '--font-barlow',
});

export const metadata: Metadata = {
    icons: {
        icon: `${process.env.BASE_PATH}/logo-mark.svg`
    }
}

export default function Layout({children}: { children: ReactNode }) {
    return (
        <html lang="en" className={`${chakra.variable} ${barlow.variable}`} suppressHydrationWarning>
        <body className="flex flex-col min-h-screen">
            <Provider>{children}</Provider>
        </body>
        </html>
    );
}
