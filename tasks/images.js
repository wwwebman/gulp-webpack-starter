/**
 * Build image assets
 */
const gulp = require('gulp');
const { reload } = require('browser-sync');
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const path = require('path');
const plumber = require('gulp-plumber');
const pngquant = require('imagemin-pngquant');
const changed = require('gulp-changed');

const config = require('./config');

gulp.task('img', () =>
  gulp
    .src(path.join(config.root.dev, config.img.dev, config.img.extensions))
    .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
    .pipe(changed(path.join(config.root.dist, config.img.dist)))
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [
        { removeViewBox: false },
        { cleanupIDs: false },
      ],
      use: [
        pngquant(),
      ],
    }))
    .pipe(gulp.dest(path.join(config.root.dist, config.img.dist)))
    .pipe(reload({ stream: true })));
