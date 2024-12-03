const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozjpeg = require('imagemin-mozjpeg');
const path = require("path");

module.exports = {
  entry: {
    app: path.resolve(__dirname, "src/scripts/index.js"),
    sw: path.resolve(__dirname, "src/scripts/sw.js"),
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "src/templates/index.html"),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/public/"),
          to: path.resolve(__dirname, "dist/"),
        },
      ],
    }),
    new ImageminWebpackPlugin({
      /**
       * Full documentations:
       * https://github.com/Klathmon/imagemin-webpack-plugin#api
       */
      plugins: [
        ImageminMozjpeg({
          /**
           * Full documentations:
           * https://github.com/imagemin/imagemin-mozjpeg#api
           */
          quality: 50,
          progressive: true,
        }),
      ],
    }),
  ],
};
