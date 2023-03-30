const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  test: /\.(css|scss)$/i,
  use: [
    MiniCssExtractPlugin.loader,
    {
      loader: "css-loader",
      options: { sourceMap: true, modules: true },
    },
    "sass-loader",
  ],
};
