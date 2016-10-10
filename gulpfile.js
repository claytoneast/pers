'use strict'

var gulp = require('gulp')
var sass = require('gulp-sass')

gulp.task('sass', function () {
  return gulp.src('styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(''))
})

gulp.task('watch', function () {
  gulp.watch('styles.scss', ['autoprefixer'])
})

gulp.task('autoprefixer', ['sass'], function () {
  var postcss = require('gulp-postcss')
  var sourcemaps = require('gulp-sourcemaps')
  var autoprefixer = require('autoprefixer')

  return gulp.src('*.css')
      .pipe(sourcemaps.init())
      .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(''))
})
