const gulp = require("gulp");
const webpack = require("webpack");

gulp.task("beginScripts", done => {
  webpack(require("../../webpack.config"), (err, stats) => {
    if (err) {
      console.log(err.toString());
    }
    console.log(stats.toString());
    done();
  });
});

gulp.task(
  "scripts",
  gulp.series(gulp.task("modernizr"), gulp.task("beginScripts"))
);
