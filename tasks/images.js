const changed = require('gulp-changed');
const gulp = require('gulp');
const imageMin = require('gulp-imagemin');
const notify = require('gulp-notify');
const path = require('path');
const plumber = require('gulp-plumber');
const pngQuant = require('imagemin-pngquant');
const { reload } = require('browser-sync');

const config = require('../config');

gulp.task('images', () =>
  gulp
    .src(path.join(config.root.dev, config.images.dev, config.images.extensions))
    .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
    .pipe(changed(path.join(config.root.dist, config.images.dist)))
    .pipe(imageMin({
      progressive: true,
      svgoPlugins: [
        { removeViewBox: false },
        { cleanupIDs: false },
      ],
      use: [
        pngQuant(),
      ],
    }))
    .pipe(gulp.dest(path.join(config.root.dist, config.images.dist)))
    .pipe(reload({ stream: true })));
