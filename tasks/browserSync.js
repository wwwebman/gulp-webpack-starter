/**
 * Browser Sync & webpack middlewares
 */

const browserSync = require("browser-sync");
const gulp = require("gulp");
const path = require("path");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");

const config = require("../config");
const mode = require("./helpers/mode");
const webpackConfig = require("./helpers/webpackConfig");

const webpackCompiler = webpack(webpackConfig);

let browserSyncConfig = {
  logPrefix: "gulp-webpack-starter",
  port: config.browserSync.port,
  ui: {
		port: config.browserSync.portUI
  }
};

/**
 * Use Proxy
 * else create Server
 */
if (config.browserSync.proxy.target) {
  browserSyncConfig.proxy = {
    target: config.browserSync.proxy.target
	};
} else {
  browserSyncConfig.server = {
    baseDir: config.root.dist
	};
}

if (!mode.production) {
  browserSyncConfig.middleware = [
    webpackDevMiddleware(webpackCompiler, {
      publicPath: webpackConfig.output.publicPath,
      noInfo: false,
			quiet: false,
			lazy: false,
			stats: {
				colors: true,
			},
    }),
    webpackHotMiddleware(webpackCompiler)
  ];
}

gulp.task("live", () => {
  browserSync.init(browserSyncConfig);
});
