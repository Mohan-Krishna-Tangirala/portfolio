import { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'portfolio-FE'; // Replace with your GitHub repository name

const nextConfig: NextConfig = {
  images: {
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'],
  },
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  trailingSlash: true,
  //output: 'export',
  reactStrictMode: true,
};

export default nextConfig;
