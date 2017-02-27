/**
 * Build font assets
 */

var gulp        = require ('gulp');
var	browserSync = require ('browser-sync');
var	reload      = browserSync.reload;
var path        = require('path');
var notify      = require("gulp-notify");
var plumber     = require('gulp-plumber');

var config      = require("../config");
var mode        = require("./helpers/mode");	

gulp.task('fonts', function() {
	return gulp.src(path.join(config.root.dev, config.fonts.dev, config.fonts.extensions))
	.pipe(gulp.dest(path.join(config.root.dist, config.fonts.dist)))
	.pipe(reload({stream: true}));
});