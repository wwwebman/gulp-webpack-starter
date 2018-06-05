/**
 * Size report
 */
const gulp = require('gulp');
const sizereport = require('gulp-sizereport');
const path = require('path');

const config = require('./config.json');

gulp.task('size', () =>
  gulp
    .src(path.join(config.root.dist, 'assets/**/*.+(css|js)'))
    .pipe(sizereport()));
