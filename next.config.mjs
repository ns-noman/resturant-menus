/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '123.200.18.157',
      }
    ]
  }
};

export default nextConfig;
