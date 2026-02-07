/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  trailingSlash: true,

  // Allow cross-origin requests in development
  allowedDevOrigins: [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://100.66.19.214:3000",
    // Add any other origins that need access during development
  ],
};

module.exports = nextConfig;
