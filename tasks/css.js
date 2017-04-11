/**
 * Build CSS
 */

var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var reload       = browserSync.reload;
var autoprefixer = require('gulp-autoprefixer');
var glob         = require('glob');
var gulpif       = require('gulp-if');
var minify       = require('gulp-clean-css');
var notify       = require('gulp-notify');
var path         = require('path');
var plumber      = require('gulp-plumber');
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var uncss        = require('gulp-uncss');

var config       = require('../config');
var mode         = require('./helpers/mode');

// Configiration for gulp-uncss plugin.
var unCssIgnore  = [
    /(#|\.)fancybox(\-[a-zA-Z]+)?/,
    /col\-[a-zA-Z]+\-[0-9]+/,
    /(#|\.)(is-)/,
    /(#|\.)(js-)/,
    /swiper/,
    // classes with smacss prefixes
    /(l|m|h)\-/,
    // bootstrap classes
    /tooltip/,
    '.modal',
    '.panel',
    '.active',
    '.hide',
    '.show',
    '.fade',
    '.fade.in',
    '.collapse',
    '.collapse.in',
    '.navbar-collapse',
    '.navbar-collapse.in',
    '.collapsing'
];

gulp.task('css', function() {
   return gulp.src(path.join(config.root.dev, config.css.dev, 'bundle.scss'))
   .pipe(gulpif(!mode.production, sourcemaps.init()))
   .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
   .pipe(sass({
      includePaths: ['./node_modules', './bower_components'],
      outputStyle: 'expanded',
      sourceMap: true,
      errLogToConsole: true
    }))

	/**
	 * You can use this feature if you have a lot of vendor css/scss libs.
	 * The main problem with this plugin - finding selector in js file.
	 * Use unCssIgnore to prevent removing some classes/ids.
	 * If you have some solution - make pull request/open issue.
	 */
     
    .pipe(gulpif(config.css.uncss, uncss({
        html: glob.sync(path.join(config.root.dev, config.html.dev, './**/*.html')),
        ignore: unCssIgnore
    })))

    .pipe(autoprefixer({
        browsers: ['last 3 version'],
    }))
    .pipe(gulpif(mode.production, minify({
        keepSpecialComments: 0
    })))
    .pipe(gulpif(!mode.production, sourcemaps.write()))
    .pipe(gulp.dest(path.join(config.root.dist, config.css.dist)))
    .pipe(reload({stream: true}));
});
