// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: async () => [
    {
      source: "/",
      destination: "/todolist",
      permanent: false, // Đặt thành true nếu muốn redirect vĩnh viễn (301)
    },
  ],
};

export default nextConfig;

