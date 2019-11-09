const gulp = require("gulp");
const svgSprite = require("gulp-svg-sprite");
const rename = require("gulp-rename");
const del = require("del");

const config = {
  mode: {
    css: {
      sprite: "sprite.svg",
      render: {
        css: {
          template: "./gulp/templates/sprite.css"
        }
      }
    }
  }
};

gulp.task("beginClean", () => {
  return del(["./app/temp/sprite", "./app/assets/images/sprites"]);
});

gulp.task("createSprite", () => {
  return gulp
    .src("./app/assets/images/icons/**/*.svg")
    .pipe(svgSprite(config))
    .pipe(gulp.dest("./app/temp/sprite/"));
});

gulp.task("copySpriteGraphic", () => {
  return gulp
    .src("./app/temp/sprite/css/**/*.svg")
    .pipe(gulp.dest("./app/assets/images/sprites"));
});

gulp.task("copySpriteCSS", () => {
  return gulp
    .src("./app/temp/sprite/css/*.css")
    .pipe(rename("_sprite.css"))
    .pipe(gulp.dest("./app/assets/styles/modules"));
});

gulp.task("endClean", () => {
  return del("./app/temp/sprite");
});

gulp.task(
  "icons",
  gulp.series(
    gulp.task("beginClean"),
    gulp.task("createSprite"),
    gulp.task("copySpriteGraphic"),
    gulp.task("copySpriteCSS"),
    gulp.task("endClean")
  )
);
