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

var mode                 = require('./helpers/mode');
var config               = require("../config");

var serverConfig = {
	logPrefix: "webman.pro",
    port: 3000,
	ui: {
		port: 3001
	}
};


// Run middleware only on development mode
if(!mode.production)
serverConfig.middleware = [
	webpackDevMiddleware(compiler, {
	    noInfo: true,
	    publicPath: path.join('/', webpackConfig.output.publicPath),
	    stats: 'errors-only'
	}),
	webpackHotMiddleware(compiler)
]

// Change config when we have Server
config.proxy 
? serverConfig.proxy = config.proxy
: Object.assign(serverConfig, {
	server: {
		baseDir: config.root.dist,
	},
	tunnel: false,
})

var live = function(){
	browserSync.init(serverConfig);
};

gulp.task('live', live);