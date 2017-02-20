/**
 * Browser Sync & webpack middleware
 */

var gulp                 = require ('gulp');
var	browserSync          = require('browser-sync');
var webpackConfig        = require('./helpers/webpackConfig')();
var webpack              = require('webpack');
var compiler             = webpack(webpackConfig);
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var path                 = require('path');

var config = require("../config");

var live = function(){
	var serverConfig = {
		tunnel: false,
		server: {
			baseDir: config.root.dist,
			middleware: [
		    	webpackDevMiddleware(compiler, {
				    noInfo: true,
				    publicPath: path.join('/', webpackConfig.output.publicPath),
				    stats: 'errors-only'
				}),
				webpackHotMiddleware(compiler)
		    ]
		},
		browser: process.platform === 'linux' ? 'chromium-browser' : 'google chrome',
	    port: 3000,
	    logPrefix: "webman.pro"
	};
	browserSync.init(serverConfig);
};

gulp.task('live', live);