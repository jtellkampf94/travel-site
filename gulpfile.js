const gulp = require("gulp");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssvars = require("postcss-simple-vars");
const nested = require("postcss-nested");
const cssImport = require("postcss-import");
const browserSync = require("browser-sync");

gulp.task("default", done => {
  console.log("Hooray - You created a gulp task!");
  done();
});

gulp.task("html", done => {
  console.log("Imagine something useful being done to your html here.");
  done();
});

gulp.task("styles", done => {
  return gulp
    .src("./app/assets/styles/styles.css")
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest("app/temp/styles"));
});

gulp.task("watch", done => {
  gulp.watch(["./app/index.html"], gulp.task("html"));

  gulp.watch(["./app/assets/styles/**/*.css"], gulp.task("styles"));
  done();
});
