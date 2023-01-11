/**
 * @type {import('next').NextConfig}
 */

const { withSentryConfig } = require("@sentry/nextjs")

const nextConfig = {
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
  sentry: {
    hideSourceMaps: true,
  },
}

const sentryWebpackPluginOptions = {
  silent: true,
}

module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions)
