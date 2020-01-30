const autoPrefixer = require('gulp-autoprefixer');
const gulp = require('gulp');
const gulpif = require('gulp-if');
const minify = require('gulp-clean-css');
const notify = require('gulp-notify');
const path = require('path');
const plumber = require('gulp-plumber');
const purgecss = require('gulp-purgecss');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const { reload } = require('browser-sync');

const config = require('../config');

gulp.task('css', () =>
  gulp
    .src(path.join(config.root.dev, config.css.dev, 'index.scss'))
    .pipe(gulpif(!config.production, sourcemaps.init()))
    .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
    .pipe(sass({
      includePaths: ['./node_modules'],
      outputStyle: 'expanded',
      sourceMap: true,
      errLogToConsole: true,
    }))
    .pipe(gulpif(
      config.css.purge,
      purgecss({
        content: config.css.purgeContent,
        whitelist: config.css.purgeWhitelist,
      })
    ))
    .pipe(autoPrefixer())
    .pipe(gulpif(
      config.production,
      minify({
        keepSpecialComments: 0,
      }),
    ))
    .pipe(gulpif(!config.production, sourcemaps.write()))
    .pipe(rename('main.css'))
    .pipe(gulp.dest(path.join(config.root.dist, config.css.dist)))
    .pipe(reload({ stream: true })));
