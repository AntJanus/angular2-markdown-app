var gulp = require('gulp');
var webpack = require('gulp-webpack');
var connect = require('gulp-connect');
var less = require('gulp-less');

gulp.task('connect', ['copy'], function() {
  connect.server({
    root: ['./build'],
    port: 3001
  });
});

gulp.task('scripts', function() {
	return gulp.src('./src/app.ts')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('./build'))
  ;
});

gulp.task('copy', function() {

  return gulp.src(['./src/**/**.html', './src/**/**.css'], {
      base: './src'
    })
    .pipe(gulp.dest('./build'))
  ;
});

gulp.task('less', function() {
  return gulp.src('./src/less/app.less')
    .pipe(less({
      paths: ['./src/less', './bower_components/tseczka-css/less']
    }))
    .pipe(gulp.dest('./build/css'))
})

gulp.task('default', ['scripts', 'copy', 'less', 'connect'], function() {
  gulp.watch(['./src/**/**.css', './src/**/**.html'], ['copy']);
  gulp.watch('./src/**/**.ts', ['scripts']);
  gulp.watch('./src/**/**.less', ['less']);
});
