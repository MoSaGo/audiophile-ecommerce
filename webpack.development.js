const { default: merge } = require("webpack-merge")
const webpackCommon = require("./webpack.common")

/**@type {import('webpack').Configuration}*/
const devConfig = {
  devServer: {
    port: 3002,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
  output: {
    publicPath: "/",
  },
  mode: "development",
}

module.exports = merge(webpackCommon, devConfig)
