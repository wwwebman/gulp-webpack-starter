/**
 * Build svg sprite
 */
const gulp = require('gulp');
const { reload } = require('browser-sync');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const svgSprite = require('gulp-svg-sprite');
const path = require('path');

const config = require('./config');

const svgConf = {
  shape: {
    spacing: {
      padding: 10,
    },
    dimension: {
      maxWidth: 32,
      maxHeight: 32,
    },
  },
  mode: {
    css: {
      dimensions: true,
      common: 'icon',
      layout: 'vertical',
      prefix: '.icon-',
      bust: false,
      dest: './',
      sprite: '../img/svg/sprite.svg',
      render: {
        scss: {
          /**
           * Change default CSS output path to ./dev/sass/vendor/_sprite.scss
           * Reason - to have just one bundle.css
           */
          dest: path.join(
            '../../../',
            config.root.dev,
            config.css.dev,
            'parts/vendor/_sprite.scss',
          ),
        },
      },
    },
  },
};

gulp.task('svg', () =>
  gulp
    .src(path.join(config.root.dev, config.svg.dev, '*.svg'))
    .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
    .pipe(svgSprite(svgConf))
    .pipe(gulp.dest(path.join(config.root.dist, config.svg.dist)))
    .pipe(reload({ stream: true })));
