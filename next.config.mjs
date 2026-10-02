import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

// Served under munchem.me/Electrodromos; set BASE_PATH="" to serve from the domain root
const basePath = process.env.BASE_PATH ?? "/Electrodromos"

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  devIndicators: false,
  output: "export",
  basePath,
  images: {
    unoptimized: true
  },
  env: {
    BASE_PATH: basePath
  }
};

export default withMDX(config);
