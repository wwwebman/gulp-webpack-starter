const gulp = require('gulp');
const sizeReport = require('gulp-sizereport');
const path = require('path');

const config = require('../config');

gulp.task('sizeReport', () =>
  gulp
    .src(path.join(config.root.dist, 'assets/**/*.+(css|js)'))
    .pipe(sizeReport()));
