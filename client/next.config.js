/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'canva.com',
        port: '',
        pathname: '*/**',
      },
    ],
  },
  env: {
    mongodburl: "Your MongoDB connection String",
  }
}

module.exports = nextConfig
