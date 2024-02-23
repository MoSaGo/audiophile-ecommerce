const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

/**@type {import('webpack').Configuration}*/
module.exports = {
  entry: {
    app: path.resolve(__dirname, "src", "index.jsx"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?/i,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@components": path.resolve(__dirname, "src", "components"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
}
