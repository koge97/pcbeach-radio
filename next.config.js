const withPWA = require('next-pwa')({
  dest: 'public',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  assetPrefix: './',
  images: {
    unoptimized: true,
  },
}

// module.exports = withPWA(nextConfig);

module.exports = nextConfig;