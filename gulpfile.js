var gulp = require('gulp');
var connect = require('gulp-connect');

uglify = require('gulp-uglify');
jshint = require('gulp-jshint');

gulp.task('connect', function() {
  connect.server({
    root: 'public',
    port: 4000
  });
}).task('make', function() {
  gulp.src('./src/*.js')
    .pipe(jshint())
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));

});
