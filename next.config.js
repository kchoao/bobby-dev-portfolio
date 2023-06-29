/** @type {import('next').NextConfig} */

const withNextIntl = require('next-intl/plugin')(
  // This is the default (also the `src` folder is supported out of the box)
  './i18n.ts'
);

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  swcMinify: true,
  images: {
    domains: ["vercel.com"],
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/kchoao",
        permanent: false,
      },
    ];
  },
};

module.exports = withNextIntl(nextConfig);