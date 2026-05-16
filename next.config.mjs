/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: [
    'http://192.168.127.1',
    'http://192.168.127.1:3000',
    '192.168.127.1',
    'http://localhost',
    'http://localhost:3000',
  ],
};

export default nextConfig;
