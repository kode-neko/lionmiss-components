const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {fonts, pics, style, ts} = require("./loaders");

module.exports = {
  mode: "production",
  entry: path.join(__dirname, "../src/lib/index.ts"),
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "[name].js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".tsx", ".jsx", ".ts", ".js"],
  },
  plugins: [new MiniCssExtractPlugin()],
  devtool: "eval-source-map",
  module: {
    rules: [fonts, pics, style, ts],
  },
};
