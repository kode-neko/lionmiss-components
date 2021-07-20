import path from "path";
import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

const config: Configuration = {
  mode: "development",
  cache: false,
  output: {
    publicPath: "/",
  },
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx|jsx)?$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "fonts/",
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif|webp)$/i,
        loader: "file-loader",
        options: {
          name: (): string => {
            if (process.env.NODE_ENV === "development")
              return "[path][name].[ext]";
            return "[contenthash].[ext]";
          },
          outputPath: "imgs/",
        },
      },
      {
        test: /\.(sass|scss|css)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      "@node_modules": path.resolve(__dirname, "node_modules/"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/public/index.html",
    }),
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
  ],
  devtool: "inline-source-map",
  devServer: {
    static: path.join(__dirname, "build"),
    historyApiFallback: true,
    port: 4000,
    open: false,
    hot: true,
  },
};

export default config;
