module.exports = {
  test: /\.jsx?$/,
  exclude: /(.yarn|node_modules)/,
  use: [
    {
      loader: "swc-loader",
      options: {
        module: {
          type: "es6"
        },
        jsc: {
          parser: {
            syntax: "ecmascript",
            jsx: true
          },
          transform: {
            react: {
              runtime: "automatic"
            }
          }
        }
      }
    }
  ],
};