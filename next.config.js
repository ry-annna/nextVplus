require("dotenv").config();

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**",
      },
    ],
  },
};

// remotePatterns: [
//   {
//     protocol: "https",
//     hostname: "**",
//     port: "",
//     pathname: "**",
//   },
// ],
module.exports = nextConfig;
