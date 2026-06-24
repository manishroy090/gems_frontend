const nextConfig = {
  output: "standalone",
  crossOrigin: 'anonymous',
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/:path*",
          has: [{ type: "host", value: "greenvally.localhost" }],
          destination: "/:path*",
        },
        {
          source: "/:path*",
          has: [{ type: "host", value: "silveroakhospital.localhost" }],
          destination: "/:path*",
        },
         {
          source: "/:path*",
          has: [{ type: "host", value: "https://medinexus-production-a69b.up.railway.app/" }],
          destination: "/:path*",
        },
      ],
    };
  },
};

export default nextConfig;
