/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx"],
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  images: {
    domains: ["res.cloudinary.com"]
  },
};

module.exports = nextConfig;
