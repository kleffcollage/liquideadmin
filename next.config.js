/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require("next-pwa")({
  dest: "public",
  disable: true,
});

/** @type {import('next').NextConfig} */

module.exports = withPWA({
  // next.js config
  reactStrictMode: true,
  eslint: {
    dirs: ["src"],
  },
});
