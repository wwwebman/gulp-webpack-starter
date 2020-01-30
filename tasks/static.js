const gulp = require('gulp');
const path = require('path');
const { reload } = require('browser-sync');

const config = require('../config');

gulp.task('static', () =>
  gulp
    .src(path.join(config.root.dev, config.static.dev, '**/*'))
    .pipe(gulp.dest(path.join(config.root.dist, config.static.dist)))
    .pipe(reload({ stream: true })));
