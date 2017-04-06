/**
 * Build HTML
 */

var gulp        = require ('gulp');
var	browserSync = require ('browser-sync');
var	reload      = browserSync.reload;
var fileinclude = require('gulp-file-include');
var gulpif      = require('gulp-if');
var notify      = require("gulp-notify");
var path        = require('path');
var plumber     = require('gulp-plumber');

var config      = require("../config");
var mode        = require("./helpers/mode");

gulp.task('php', function(){
	reload(path.resolve(config.root.dev, config.php.dev));
});

gulp.task('html', function(){
	return gulp.src(path.join(config.root.dev, config.html.dev, './*.html'))
	/**
	 * 
	 * @fixme - Cache. gulp-cached/gulp-newer plugins can't detect changes at ./html/templates/*,because I use gulp-file-include.
	 * .pipe(changed(path.join(config.root.dist, config.html.dist)))
	 * 
	 */
	.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
	.pipe(
		fileinclude({
			prefix: '@@',
  			basepath: path.join(config.root.dev, config.html.dev, config.html.parts)
		})
	)
	.pipe(gulp.dest(path.join(config.root.dist, config.html.dist)))
	.pipe(reload({stream: true}));
});