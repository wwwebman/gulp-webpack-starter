/**
 * Browser Sync & webpack middleware
 */

var gulp                 = require('gulp');
var	browserSync          = require('browser-sync');
var path                 = require('path');

var mode                 = require('./helpers/mode');
var config               = require("../config");

var serverConfig = {
	logPrefix: "webman.pro",
    port: 3000,
    reloadDelay: 1000,
	ui: {
		port: 3001
	}
};

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