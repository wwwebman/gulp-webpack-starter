/**
 * Build image assets
 */

var gulp        = require ('gulp');
var	browserSync = require ('browser-sync');
var	reload      = browserSync.reload;
var imagemin    = require ('gulp-imagemin');
var notify      = require("gulp-notify");
var path        = require('path');
var plumber     = require('gulp-plumber');
var pngquant    = require ('imagemin-pngquant');
var changed     = require('gulp-changed');

var config      = require("../config");

gulp.task('img', function() {
	return gulp.src(path.join(config.root.dev, config.img.dev, '**/', config.img.extensions))
	.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
	.pipe(changed(path.join(config.root.dist, config.img.dist)))
	.pipe(imagemin({
		progressive: true,
		svgoPlugins: [
			{removeViewBox: false},
			{cleanupIDs: false}
		],
		use: [pngquant()]
	}))
	.pipe(gulp.dest(path.join(config.root.dist, config.img.dist)))
	.pipe(reload({stream: true}));
});
