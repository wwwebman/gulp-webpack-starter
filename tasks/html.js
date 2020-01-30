const fileInclude = require('gulp-file-include');
const gulp = require('gulp');
const notify = require('gulp-notify');
const path = require('path');
const plumber = require('gulp-plumber');
const { reload } = require('browser-sync');

const config = require('../config');

gulp.task('html', () =>
  gulp
    .src(path.join(config.root.dev, config.html.dev, './*.html'))
    .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
    .pipe(fileInclude({
      prefix: '@@',
      basepath: path.join(
        config.root.dev,
        config.html.dev,
        config.html.parts,
      ),
    }))
    .pipe(gulp.dest(path.join(config.root.dist, config.html.dist)))
    .pipe(reload({ stream: true })));

