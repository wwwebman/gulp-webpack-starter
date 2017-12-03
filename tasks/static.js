/**
 * Build static assets: video, favicons ...
 */

const gulp = require('gulp');
const { reload } = require('browser-sync');
const path = require('path');

const config = require('./config');

gulp.task('static', () =>
  gulp
    .src(path.join(config.root.dev, config.static.dev, '**/*'))
    .pipe(gulp.dest(path.join(config.root.dist, config.static.dist)))
    .pipe(reload({ stream: true })));
