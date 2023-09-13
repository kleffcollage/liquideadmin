/** @type {import('next').NextConfig} */

module.exports = {
  // next.js config
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  eslint: {
    dirs: ["src"],
  },
};
// /* eslint-disable @typescript-eslint/no-var-requires */
// const withPWA = require("next-pwa")({
//   dest: "public",
//   disable: true,
// });
