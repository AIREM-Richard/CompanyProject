var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    gp_concat = require('gulp-concat'),
    gp_rename = require('gulp-rename'),
    gp_uglify = require('gulp-uglify'),
    connect = require('gulp-connect'),
    protractor = require("gulp-protractor").protractor;

var paths = {
  webapp : 'src/main/webapp/',
  src_js : 'src/main/webapp/static/js/**/*.js',
  src_css : 'src/main/webapp/static/css/**/*.css',
  src_html : 'src/main/webapp/static/html/**/*.html',
  target_js : 'src/main/webapp/static/public/js/',
  target_css : 'src/main/webapp/static/public/css/',
  target_html : 'src/main/webapp/static/public/html/'
};

gulp.task('jshint', function () {
  return gulp.src(['gulpfile.js', paths.src_js])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('js', function(){
  return gulp.src(paths.src_js)
    .pipe(gp_concat('app.concat.js'))
    //.pipe(gp_rename('app.min.js'))
    //.pipe(gp_uglify())
    .pipe(gulp.dest(paths.target_js));
});

gulp.task('css', function() {
  return gulp.src(paths.src_css)
    .pipe(gp_concat('style.concat.css'))
    //.pipe(gp_rename('style.min.css'))
    .pipe(gulp.dest(paths.target_css));
});

gulp.task('html', function() {
  return gulp.src(paths.src_html)
    .pipe(gulp.dest(paths.target_html));
});

gulp.task('connect', function() {
  connect.server({
    root: 'src/main/webapp',
    livereload: true,
    port: 8081
  });
});

gulp.task('watch', function () {
  gulp.watch([paths.webapp + '**/*', '!' + paths.webapp + '{static/public,static/public/**}'], ['build']);
  gulp.watch(paths.webapp + '**/*', function() {
    return gulp.src(paths.webapp)
      .pipe(connect.reload());
  });
});

gulp.task('build', ['js', 'css', 'html']);
gulp.task('run', ['connect', 'watch']);
gulp.task('default', ['build']);
