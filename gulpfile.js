var gulp          = require('gulp');
var sass          = require("gulp-sass");
var autoprefixer  = require("gulp-autoprefixer");
var uglify        = require('gulp-uglify');
var concat        = require('gulp-concat');
var htmlmin       = require('gulp-htmlmin');
var cleanCSS      = require('gulp-clean-css');
var connectPHP    = require("gulp-connect-php");
var browserSync   = require("browser-sync").create();
var rename        = require("gulp-rename");
var reload        = browserSync.reload();

var cycDest = "./wp-content/themes/cyc";

gulp.task("default", ["copyImages", "copyFonts", "sass", "js", "connect"], function(){
});

gulp.task("connect", function () {
  browserSync.init({
    files: ["./**/*.php"]
  });
  gulp.watch("cyc-dev/**/*.php", ["php"], reload);
  gulp.watch("cyc-dev/assets/css/*.scss", ["sass"]);
  gulp.watch("cyc-dev/assets/js/*.js", ["js"], reload);
  gulp.watch("cyc-dev/assets/img/*.*", ["copyImages"], reload)
});

gulp.task("php", function () {
  gulp.src("cyc-dev/**/*.php")
  .pipe(gulp.dest(cycDest));
})

gulp.task("copyFonts",function () {
  return gulp.src("cyc-dev/assets/fonts/**/*.*")
  .pipe(gulp.dest(cycDest + "assets/fonts"));
});

gulp.task("js", function () {
  return gulp.src("cyc-dev/assets/js/*.js")
  .pipe(uglify())
  .pipe(gulp.dest(cycDest + "/assets/js"));
});

gulp.task("sass", function(){
  return gulp.src("cyc-dev/assets/css/main.scss")
  .pipe(sass({
    // outputStyle: "compressed",
  })
    .on("error", sass.logError)
  )
  .pipe(autoprefixer({
    browsers: ["last 2 versions"]
  }))
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(rename("style.css"))
  .pipe(gulp.dest(cycDest))
  .pipe(browserSync.stream());
});

gulp.task("copyLibs", function () {
  return gulp.src("cyc-dev/assets/libs/**/*.*")
  .pipe(gulp.dest(cycDest + '/assets/libs'));
});

gulp.task("copyImages", function () {
  return gulp.src("cyc-dev/assets/img/*.*")
  .pipe(gulp.dest(cycDest + '/assets/img'));
});
