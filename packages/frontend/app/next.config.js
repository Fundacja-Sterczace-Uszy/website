/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  env: {
    PUBLIC_STRAPI_API_URL: process.env.PUBLIC_STRAPI_API_URL,
  },
  images: {
    loader: "default",
    domains: ["localhost"],
  },
  experimental: {
    externalDir: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    })

    return config
  },
}

module.exports = nextConfig
