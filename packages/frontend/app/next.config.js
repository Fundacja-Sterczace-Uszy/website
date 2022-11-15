/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  env: {
    MY_HEROKU_URL: process.env.MY_HEROKU_URL,
  },
  images: {
    loader: "default",
    domains: ["localhost"],
  },
  experimental: {
    externalDir: true,
  },
}

module.exports = nextConfig
