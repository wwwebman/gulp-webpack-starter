/**
 * Build JS
 */
const gulp = require('gulp');
const webpack = require('webpack');

const webpackConfig = require('./webpack.config');
const Log = require('./lib/logger');

gulp.task('js', (cb) => {
  webpack(webpackConfig, (err, stats) => {
    if (err) {
      new Log('Webpack', err).error();
    }
    new Log('Webpack', stats.toString({
      assets: true,
      chunks: false,
      chunkModules: false,
      colors: true,
      hash: false,
      timings: true,
      version: false,
    })).info();
    cb();
  });
});
