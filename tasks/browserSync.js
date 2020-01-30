const browserSync = require('browser-sync');
const gulp = require('gulp');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const config = require('../config');
const webpackConfig = require('../webpack.config');

const webpackCompiler = webpack(webpackConfig);

const browserSyncConfig = {
  logPrefix: 'gulp-webpack-starter',
  port: config.browserSync.port,
  ui: {
    port: config.browserSync.port + 1,
  },
};

/** Uses Proxy. Otherwise creates a server. */
if (config.browserSync.proxy.target) {
  browserSyncConfig.proxy = {
    target: config.browserSync.proxy.target,
  };

  browserSyncConfig.files = config.browserSync.proxy.files;
} else {
  browserSyncConfig.server = {
    baseDir: config.root.dist,
  };
}

if (!config.production) {
  browserSyncConfig.middleware = [
    webpackDevMiddleware(webpackCompiler, {
      publicPath: config.browserSync.proxy.publicPath,
      noInfo: true,
      stats: {
        colors: true,
      },
    }),
    webpackHotMiddleware(webpackCompiler),
  ];
}

gulp.task('liveReload', () => {
  browserSync.init(browserSyncConfig);
});
