const gulp = require("gulp");
const browserSync = require("browser-sync").create();

gulp.task("watch", done => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });

  gulp.watch(["./app/index.html"], done => {
    browserSync.reload();
    done();
  });

  gulp.watch(
    ["./app/assets/styles/**/*.css"],
    gulp.series(gulp.task("styles"), gulp.task("cssInject"))
  );

  gulp.watch(
    ["./app/assets/scripts/**/*.js"],
    gulp.series(
      gulp.task("modernizr"),
      gulp.task("scripts"),
      gulp.task("scriptsRefresh")
    )
  );

  done();
});

gulp.task("cssInject", () => {
  return gulp.src("./app/temp/styles/styles.css").pipe(browserSync.stream());
});

gulp.task("scriptsRefresh", done => {
  browserSync.reload();
  done();
});
