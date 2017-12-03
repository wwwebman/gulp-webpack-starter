/**
 * Build font assets
 */
const gulp = require('gulp');
const { reload } = require('browser-sync');
const path = require('path');

const config = require('./config');

gulp.task('fonts', () =>
  gulp
    .src(path.join(config.root.dev, config.fonts.dev, config.fonts.extensions))
    .pipe(gulp.dest(path.join(config.root.dist, config.fonts.dist)))
    .pipe(reload({ stream: true })));
