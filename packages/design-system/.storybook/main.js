module.exports = {
  stories: [
    "../components/**/__stories__/*.stories.@(mdx|jsx)",
    "../recipes/**/__stories__/*.stories.@(mdx|jsx)",
    "../icons/__stories__/*.stories.@(mdx|jsx)",
    "../illustrations/__stories__/*.stories.@(mdx|jsx)",
    "../theme/__stories__/*.stories.@(mdx|jsx)",
    "../templates/**/__stories__/*.stories.@(mdx|jsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-controls",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: (config) => {
    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test(".svg")
    )
    fileLoaderRule.exclude = /\.svg$/

    config.module.rules.push({
      test: /\.svg$/,
      enforce: "pre",
      loader: require.resolve("@svgr/webpack", {
        options: { icon: true },
        replaceAttrValues: { "#000": "{props.color}" },
      }),
    })

    return config
  },
}
