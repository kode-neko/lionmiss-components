module.exports = {
  test: /\.(woff|woff2|eot|ttf|otf)$/,
  exclude: /(.yarn|node_modules)/,
  use: [
    {
      loader: "file-loader",
      options: {
        outputPath: 'fonts',
      },
    }
  ],
};