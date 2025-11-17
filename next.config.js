/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/chat-app',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig