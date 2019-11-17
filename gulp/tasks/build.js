const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const del = require("del");
const usemin = require("gulp-usemin");
const rev = require("gulp-rev");
const cssnano = require("gulp-cssnano");
const uglify = require("gulp-uglify");
const browserSync = require("browser-sync").create();

gulp.task("previewDist", done => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "docs"
    }
  });
  done();
});

gulp.task("deleteDistFolder", () => {
  return del("./docs");
});

gulp.task("copyGeneralFiles", () => {
  const pathsToCopy = [
    "./app/**/*",
    "!./app/index.html",
    "!./app/assets/images/**",
    "!./app/assets/styles/**",
    "!./app/assets/scripts/**",
    "!./app/temp",
    "!./app/temp/**"
  ];
  return gulp.src(pathsToCopy).pipe(gulp.dest("./docs"));
});

gulp.task("optimizeImages", () => {
  return gulp
    .src([
      "./app/assets/images/**/*",
      "!./app/assets/images/icons",
      "!./app/assets/images/icons/**/*"
    ])
    .pipe(
      imagemin({
        progressive: true,
        interlaced: true,
        multipass: true
      })
    )
    .pipe(gulp.dest("./docs/assets/images"));
});

gulp.task("usemin", () => {
  return gulp
    .src("./app/index.html")
    .pipe(
      usemin({
        css: [
          function() {
            return rev();
          },
          function() {
            return cssnano();
          }
        ],
        js: [
          function() {
            return rev();
          },
          function() {
            return uglify();
          }
        ]
      })
    )
    .pipe(gulp.dest("./docs"));
});

gulp.task(
  "build",
  gulp.series(
    gulp.task("deleteDistFolder"),
    gulp.task("copyGeneralFiles"),
    gulp.task("icons"),
    gulp.task("optimizeImages"),
    gulp.task("styles"),
    gulp.task("scripts"),
    gulp.task("usemin")
  )
);
