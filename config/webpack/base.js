const { webpackConfig, merge } = require("@rails/webpacker");
const ForkTSCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const customConfig = {
  module: {
    rules: [
      {
        test: /\.(jsx|tsx|ts|js)/,
        use: ["babel-loader"]
      }
    ],
  },
  plugins: [new ForkTSCheckerWebpackPlugin()]
};

module.exports = merge(
  webpackConfig,
  customConfig
);
