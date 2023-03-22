/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dummyimage.com",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/amp/erfahrungsbericht-trackle",
        destination: "/post/erfahrungsbericht-trackle",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
