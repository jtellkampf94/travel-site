const gulp = require("gulp");
const webpack = require("webpack");
const webpackCLI = require("webpack-cli");

gulp.task("scripts", done => {
  webpack(require("../../webpack.config"), err => {
    console.log(err);
    console.log("webpack done!!!!!!!!");
    done();
  });
});
