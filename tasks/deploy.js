/**
 * Deploy task
 */

var gulp        = require ('gulp');
var path        = require('path');
var ftp         = require('vinyl-ftp');
var gutil       = require('gulp-util');
var notify      = require("gulp-notify");
var plumber     = require('gulp-plumber');
var prompt      = require('gulp-prompt');

var log         = require('./helpers/logger');
var mode        = require('./helpers/mode');
var defaultTask = require('./default');
var config      = require('../config');

var connConf = {
	host    : config.deploy.hostname,
	user    : config.deploy.username,
	password: config.deploy.password,
	parallel: 10,
	log     : gutil.log
};

var conn = ftp.create(connConf);

/**
 * You can use bash instead or some other solution.
 * @todo implement something more secure.
 */
gulp.task('deploy', function(cb){
	var folderToPush = [path.join(config.root.dist + '/**')];
	if (config.root.dist === './') folderToPush = ['./assets', '*.+(html|php)'];

	if (!mode.production) new log('Deploy Task', 'You can run Deploy Task only in Production Mode.\nUse: npm run deploy').error();

	return gulp.src(folderToPush, {buffer: false })
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
	.pipe(prompt.confirm({
	    message: 'Heads Up! Check ../config.json & Confirm deploy',
	    default: false
  	}))
  	.pipe(conn.newer(config.deploy.path))
    .pipe(conn.dest(config.deploy.path));
});