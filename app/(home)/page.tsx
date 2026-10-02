import {Metadata} from "next";
import { brand } from "@/lib/brand";
import HomeSelector from "@/app/(home)/HomeSelector";

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

export default function HomePage() {
    return <HomeSelector/>
}