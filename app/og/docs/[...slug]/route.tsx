import { getPageImage, source } from '@/lib/source';
import { notFound } from 'next/navigation';
import { ImageResponse } from 'next/og';
import { promises as fs } from 'fs';
import path from 'path';

export const revalidate = false;

const readPublic = (...parts: string[]) => fs.readFile(path.join(process.cwd(), 'public', ...parts));

const barlowRegular = readPublic('fonts', 'Barlow-Regular.ttf');
const chakraBold = readPublic('fonts', 'ChakraPetch-Bold.ttf');
const mark = readPublic('logo-mark-transparent.svg');

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string[] }> },
) {
  const { slug } = await params;
  const page = source.getPage(slug.slice(0, -1));
  if (!page) notFound();
  const [barlowData, chakraData, markData] = await Promise.all([barlowRegular, chakraBold, mark]);
  const markSrc = `data:image/svg+xml;base64,${markData.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: '#08090B',
          padding: '48px 60px',
          color: '#F4F6F7',
          fontFamily: 'Barlow',
        }}
      >
        {/* The brand thread: cyan lead, red lead. */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 6, display: 'flex' }}>
          <div style={{ width: '78%', background: '#19E3E8' }} />
          <div style={{ width: '0.6%' }} />
          <div style={{ flexGrow: 1, background: '#FF4B3A' }} />
        </div>
        <img src={markSrc} style={{ position: 'absolute', top: 40, right: 56, height: 92 }} />
        <div style={{ fontSize: 30, color: '#9AA3AB', maxWidth: '80%' }}>
          {page.data.description ? page.data.title : 'ElectroDromos'}
        </div>
        <div style={{ fontSize: 58, fontFamily: 'Chakra Petch', fontWeight: 700, lineHeight: 1.1, maxWidth: '85%' }}>
          {page.data.description ? page.data.description : page.data.title}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 300,
      fonts: [
        { name: 'Barlow', data: barlowData, weight: 400, style: 'normal' },
        { name: 'Chakra Petch', data: chakraData, weight: 700, style: 'normal' },
      ],
    },
  );
}

export function generateStaticParams() {
  return source.getPages().map((page) => ({
    slug: getPageImage(page).segments,
  }));
}
