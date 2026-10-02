import {DocsLayout} from 'fumadocs-ui/layouts/docs';
import type {ReactNode} from 'react';
import {baseOptions} from '@/app/layout.config';
import {source} from '@/lib/source';
import {GithubInfo} from "fumadocs-ui/components/github-info";
import {Footer} from '@/app/Footer';
import {brand} from '@/lib/brand';

export default function Layout({children}: { children: ReactNode }) {
    return (
        <DocsLayout tree={source.pageTree} {...baseOptions} links={[{
            type: 'custom',
            children: (
                <GithubInfo owner={brand.github.owner} repo={brand.github.repo} className="lg:-mx-2"/>
            )
        }, ...baseOptions.links!]}>
            {children}
            <Footer/>
        </DocsLayout>
    );
}
