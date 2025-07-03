import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: "export",
  assetPrefix: process.env.NODE_ENV === "production" ? "/assets" : "",
  generateBuildId: async () => {
    return Date.now().toString();
  },
  async headers() {
    return [
      {
        source: "/:path*.html",
        headers: [
          {
            key: "Cache-Control",
            value: "no-cache, no-store, must-revalidate",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
