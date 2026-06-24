const nextConfig = {
  output: "standalone",
  crossOrigin: 'anonymous',
  async rewrites() {
    return {
      beforeFiles: [
        // {
        //   source: "/:path*",
        //   has: [{ type: "host", value: "greenvally.localhost" }],
        //   destination: "/:path*",
        // },
        // {
        //   source: "/:path*",
        //   has: [{ type: "host", value: "silveroakhospital.localhost" }],
        //   destination: "/:path*",
        // },
    
        //  {
        //   source: "/api/v1/:path*",
        //   destination: "http://localhost:8080/api/v1/config",
        // }
      ],
    };
  },
};

export default nextConfig;
