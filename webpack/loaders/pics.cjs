module.exports = {
  test: /\.(png|svg|jpg|gif)$/,
  exclude: /(.yarn|node_modules)/,
  use: [
    {
      loader: "file-loader",
      options: {
        outputPath: 'pics',
      },
    }
  ],
};