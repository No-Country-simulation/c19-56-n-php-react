/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["my-bucket-img-laravel-kervis.s3.amazonaws.com"],
  },
};

export default nextConfig;
