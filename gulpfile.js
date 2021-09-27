/* eslint-disable @typescript-eslint/no-var-requires */
const gulp = require("gulp");
// const sass = require("gulp-sass")(require('node-sass'))
// const clean = require("gulp-dest-clean")
const paths = {
  source: "./src/lib",
  destination: "./dist",
};

gulp.task("default", () => {
  return gulp
    .src([paths.source + "/**/*.scss"])
    //.pipe(sass())
    .pipe(gulp.dest(paths.destination));
});
