import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/#about",
        permanent: false,
      },
      {
        source: "/projects",
        destination: "/#projects",
        permanent: false,
      },
      {
        source: "/skills",
        destination: "/#skills",
        permanent: false,
      },
      {
        source: "/contact",
        destination: "/#contact",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
