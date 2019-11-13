const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "app/assets/scripts/App.js"),
  mode: "development",
  output: {
    filename: "App.js",
    path: path.resolve(__dirname, "./app/temp/scripts")
  }
};
