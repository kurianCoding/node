var gulp = require('gulp');

require('gulp-concat');
require('gulp-uglify');
require('gulp-jshint');

gulp.task('default', function() {
  gulp.src('./src/*.js')
    .pipe(jshint())
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));
});
