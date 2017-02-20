/**
 * BOWER Grabber
 */

var gulp           = require ('gulp');
var gulpBowerFiles = require('main-bower-files');
var gulpFilter     = require('gulp-filter');
var notify         = require("gulp-notify");
var path           = require('path');
var plumber        = require('gulp-plumber');

var config         = require("../config");
var mode           = require("./helpers/mode");	


gulp.task('bower', function() {
    var imgFilter  = gulpFilter(['*.jpg', '*.png*', '*.jpeg', '*.gif', '*.svg'], {restore: true});
    var scssFilter = gulpFilter('*.scss', {restore: true});
    var cssFilter  = gulpFilter('*+min.css', {restore: true});
    var fontFilter = gulpFilter(['*.eot', '*.woff*', '*.woff2*', '*.svg', '*.ttf','*.otf']);
   
    return gulp.src(gulpBowerFiles())
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))

    // img
    // ! Hard to control. Better do it manually
	// .pipe(imgFilter)
    // .pipe(gulp.dest(path.join(config.root.dist, config.img.dist, 'vendor')))
    //  .pipe(imgFilter.restore)

    // sass
    .pipe(scssFilter)
    .pipe(gulp.dest(path.join(config.root.dist, config.css.dist, config.css.parts, 'vendor')))
    .pipe(scssFilter.restore)

    // css
    .pipe(cssFilter)
    .pipe(gulp.dest(path.join(config.root.dist, config.css.dist)))
    .pipe(cssFilter.restore)

    // fonts
    .pipe(fontFilter)
    .pipe(gulp.dest(path.join(config.root.dist, config.fonts.dist)));
});