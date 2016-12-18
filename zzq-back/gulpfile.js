"use strict";
var gulp = require('gulp'),
	sourcemaps = require('gulp-sourcemaps'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'), //autoprefixer要和es6-promise一起才能使用
	base64 = require('gulp-base64'),
	cssnano = require('gulp-cssnano'),
	gp_concat = require('gulp-concat'),
	gp_uglify = require('gulp-uglify');
require('es6-promise').polyfill();

var paths = {
  webapp : 'src/main/webapp/',
  src_sass : 'src/main/webapp/static/sass/**/*.scss',
  src_js : 'src/main/webapp/static/javascript/',
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
	.pipe(base64({
        //baseDir: paths.src_static,绝对路径时设置
        extensions: ['svg', 'png', /\.jpg#datauri$/i],
        // exclude:    [/\.server\.(com|net)\/dynamic\//, '--live.jpg'], 跳过具有与这些模式匹配的网址的文件
        maxImageSize: 8*1024, // 小于等于8kb的图片进行改为base64的格式
        deleteAfterEncoding: false, //是否保留原来的图片false表示保留
        debug: true //启用日志到控制台。
    })) //将图片编辑为base64
	.pipe(sourcemaps.write('.')) //加入源方便调试
    .pipe(gulp.dest(paths.target_css));//输出到css文件夹
});

/*js 合并管理*/
gulp.task('login', function() {
  return gulp.src([paths.plugin+'jquery/1.11.3/jquery.min.js', paths.src_js+'common.js', paths.src_js+'login.js'])
    .pipe(gp_concat('login.js'))
    .pipe(gp_uglify())
    .pipe(gulp.dest(paths.target_js));
});
gulp.task('main', function() {
  return gulp.src([paths.plugin+'jquery/1.11.3/jquery.min.js', paths.src_js+'common.js', paths.src_js+'main.js'])
    .pipe(gp_concat('main.js'))
    .pipe(gp_uglify())
    .pipe(gulp.dest(paths.target_js));
});
gulp.task('customer', function() {
  return gulp.src([paths.plugin+'jquery/1.11.3/jquery.min.js', paths.src_js+'common.js', paths.src_js+'customer.js'])
    .pipe(gp_concat('customer.js'))
    .pipe(gp_uglify())
    .pipe(gulp.dest(paths.target_js));
});

gulp.task('js', ['login','main','customer']);
gulp.task('build', ['sass','js']);
gulp.task('default', ['build']);
