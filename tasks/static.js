/**
 * Build static assets: video, favicons ...
 */

var gulp        = require ('gulp');
var	browserSync = require ('browser-sync');
var	reload      = browserSync.reload;
var path        = require('path');

var config      = require("../config");
var mode        = require("./helpers/mode");

gulp.task('static', function() {
	return gulp.src(path.join(config.root.dev, config.static.dev, '**/*'))
	.pipe(gulp.dest(path.join(config.root.dist, config.static.dist)))
	.pipe(reload({stream: true}));
});
