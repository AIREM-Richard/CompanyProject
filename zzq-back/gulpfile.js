"use strict";
var gulp = require('gulp'),
	sourcemaps = require('gulp-sourcemaps'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'), //autoprefixer要和es6-promise一起才能使用
	cssnano = require('gulp-cssnano'),
	gp_concat = require('gulp-concat');
require('es6-promise').polyfill();

var paths = {
  webapp : 'src/main/webapp/',
  src_sass : 'src/main/webapp/static/sass/**/*.scss',
  src_js : 'src/main/webapp/static/javascript/**/*.js',
  plugin : 'src/main/webapp/static/plugin/',
  target_css : 'src/main/webapp/static/css/',
  target_js : 'src/main/webapp/static/js/'
};
gulp.task('sass', function () {
  return gulp.src(paths.src_sass)//编译的文件
  	.pipe(sourcemaps.init())//开始注入前缀
	.pipe(sass()) //编译scss文件
	.pipe(autoprefixer()) //加入前缀
	.pipe(cssnano()) //Minify CSS with cssnano
	.pipe(sourcemaps.write('.')) //加入源方便调试
    .pipe(gulp.dest(paths.target_css));//输出到css文件夹
});


gulp.task('base', function() {
  return gulp.src([paths.plugin+'jquery/1.11.3/jquery.min.js', paths.plugin+'jquery/2.1.4/jquery.min.js'])
    .pipe(gp_concat('base.js'))
    .pipe(gulp.dest(paths.target_js));
});

gulp.task('js', ['base']);
gulp.task('build', ['sass','js']);
gulp.task('default', ['build']);
