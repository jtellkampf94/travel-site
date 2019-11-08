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
  done();
});

gulp.task("cssInject", () => {
  return gulp.src("./app/temp/styles/styles.css").pipe(browserSync.stream());
});
