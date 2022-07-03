/** @type {import('next').NextConfig} */
const nextMDX = require("@next/mdx");

const withMDX = nextMDX({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  reactStrictMode: true,
});
