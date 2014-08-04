var gulp = require("gulp");
var path = require("path");
var browserify = require("gulp-browserify");
var concat = require("gulp-concat");
var jade = require("gulp-jade");
var rename = require("gulp-rename");

var distDir = "./dist";
var jsDir = distDir + "/js";
var cssDir = distDir + "/css";
var imgDir = distDir + "/img";

gulp.task("scripts", function () {
  gulp.src("app/app.js", {entry: true})
  .pipe(browserify({
    transform: [
      "jadeify"
    ]
  }))
  .pipe(gulp.dest(jsDir));
});

gulp.task("templates", function () {
  gulp.src("./layout/index.jade")
  .pipe(jade({
    dev: false
  }))
  .pipe(gulp.dest(distDir));
});

gulp.task("styles", function () {
  gulp.src(["./layout/**/*.css", "./pages/**/*.css", "./components/**/*.css"])
    .pipe(concat("app.css"))
    .pipe(gulp.dest(cssDir))
});

gulp.task("images", function (){
  gulp.src(["./**/*.jpg", "./**/*.jpeg", "./**/*.png", "./**/*.gif"])
  .pipe(gulp.dest(imgDir))
});

gulp.task("build", ["scripts", "templates", "styles", "images"]);
