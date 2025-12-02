import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Isso permite que o Turbopack use os certificados do seu Windows
    // para baixar a fonte sem dar erro de TLS.
    turbopackUseSystemTlsCerts: true,
  },
};

export default nextConfig;