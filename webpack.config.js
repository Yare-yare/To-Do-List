const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development", // or "production"
  entry: {
    index: "./src/index.js",
    seconed: "./src/seconed.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: false,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"), // Set contentBase to the "dist" directory
  },
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebPackPlugin({
      title: "To-Do-List",
    }),
  ],
};
