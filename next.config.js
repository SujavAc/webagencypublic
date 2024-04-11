/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "**",
        port: "",
      },
    ],
  },
  trailingSlash: true,
  distDir: "build",
};

module.exports = nextConfig;
