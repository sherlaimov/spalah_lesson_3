'use strict';
 
var gulp        = require('gulp'),
	sourcemaps  = require('gulp-sourcemaps'),
	browserSync = require('browser-sync').create(),
    sass        = require('gulp-sass');

gulp.task('serve', ['sass'], function() {
	browserSync.init({
		server: "./",
		port: 3010
	});
	gulp.watch("./stylesheet/**/*.scss", ['sass']);
	gulp.watch("./*.html").on('change', browserSync.reload);
});
 
gulp.task('sass', function () {
  return gulp.src('./stylesheet/**/*.scss')
  	.pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
});
 
gulp.task('default', ['serve']);