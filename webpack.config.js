const path = require("path");

module.exports = {
  entry: {
    App: path.resolve(__dirname, "app/assets/scripts/App.js"),
    Vendor: path.resolve(__dirname, "app/assets/scripts/Vendor.js")
  },
  mode: "development",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./app/temp/scripts")
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};
