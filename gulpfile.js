var gulp          = require('gulp');
var browserSync   = require('browser-sync').create();
var sass          = require("gulp-sass");
var autoprefixer  = require("gulp-autoprefixer");
var uglify        = require('gulp-uglify');
var concat        = require('gulp-concat');
var htmlmin       = require('gulp-htmlmin');
var cleanCSS      = require('gulp-clean-css');

gulp.task("default", ["copyImages", "htmlmin", "sass", "js", "browser-sync"], function(){
});

gulp.task('browser-sync', function() {
    browserSync.init({
        notify: false,
        server:"."
    });
    gulp.watch("src/assets/css/*.scss", ["sass"]);
    gulp.watch("src/**/*.js", ["js"]);
    gulp.watch("src/**/*.html", ["htmlmin"]);
    gulp.watch("src/assets/img/**/*.*", ["copyImages"]);
});

gulp.task('htmlmin', function() {
  return gulp.src('src/index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('.'))
    .pipe(browserSync.stream());
});

gulp.task("js", function () {
  return gulp.src("src/js/*.js")
  .pipe(uglify())
  .pipe(gulp.dest("assets/js"))
  .pipe(browserSync.stream());
});

gulp.task("sass", function(){
  return gulp.src("src/assets/css/main.scss")
  .pipe(sass({
    outputStyle: "compressed",
  })
    .on("error", sass.logError)
  )
  .pipe(autoprefixer({
    browsers: ["last 2 versions"]
  }))
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(gulp.dest("assets/css"))
  .pipe(browserSync.stream());
});

gulp.task("copyLibs", function () {
  return gulp.src("src/components/**/*.*")
  .pipe(gulp.dest('assets/components'));
});

gulp.task("copyImages", function () {
  return gulp.src("src/assets/img/*.*")
  .pipe(gulp.dest('dist/assets/img/'))
  .pipe(browserSync.stream());
});

gulp.task("copyHTML", function () {
  return gulp.src(["src/**/*.html" , "!app/components/**/*.html", "!app/index.html"])
  .pipe(gulp.dest("dist"))
  .pipe(browserSync.stream());
});
