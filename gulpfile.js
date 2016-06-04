/*jshint node:true */

'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

var paths = {
  SASS_DIR: 'sass/',
  CSS_DIR: '.',

  init: function () {
    this.SASS = this.SASS_DIR + '**/*.scss';
    return this;
  }
}.init();

gulp.task('default', ['watch']);

gulp.task('watch', function () {
  // compile scss
  gulp.watch(paths.SASS, ['sass']);
});

gulp.task('sass', function () {
  return gulp.src(paths.SASS_DIR + '*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.CSS_DIR));
});
