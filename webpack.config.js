const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: process.env?.NODE_ENV ? process.env?.NODE_ENV : "development",
  output: {
    filename: "js/main.js",
    path: path.resolve(__dirname, "docs"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/css", to: path.resolve(__dirname, "docs/css") },
        { from: "src/img", to: path.resolve(__dirname, "docs/img") },
        { from: "src/data", to: path.resolve(__dirname, "docs/data") },
        {
          from: "src/favicon.ico",
          to: path.resolve(__dirname, "docs/favicon.ico"),
        },
        {
          from: "src/robots.txt",
          to: path.resolve(__dirname, "docs/robots.txt"),
        },
      ],
    }),
  ],
};
