module.exports = {
  test: /\.tsx?$/,
  exclude: /(.yarn|node_modules)/,
  use: [
    {
      loader: "swc-loader",
      options: {
        module: {
          type: "es6",
        },
        jsc: {
          parser: {
            syntax: "typescript",
            jsx: true,
          },
          transform: {
            react: {
              runtime: "automatic",
            },
          },
        },
      },
    },
  ],
};
