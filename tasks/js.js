/**
 * Build JS
 */

var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var reload       = browserSync.reload;
var concat       = require('gulp-concat');
var uglify       = require('gulp-uglify');
var gulpif       = require('gulp-if');
var merge        = require('merge-stream');
var sourcemaps   = require('gulp-sourcemaps');
var path         = require('path');

var config       = require('../config');
var mode         = require('./helpers/mode');

gulp.task('js', function() {
  var app = gulp.src(
      path.join(config.root.dev, config.js.app, 'app.js')
    )
    .pipe(sourcemaps.init())
    .pipe(concat('app.js'))
    .pipe(gulpif(!mode.production, uglify()))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.join(config.root.dist, config.js.dist)))
    .pipe(reload({stream: true}));

  var vendor = gulp.src([
        path.join(config.root.dev, config.js.vendor, 'jquery.js'),
        path.join(config.root.dev, config.js.vendor, 'popper.js'),
        path.join(config.root.dev, config.js.vendor, 'bootstrap.js'),
        path.join(config.root.dev, config.js.vendor, 'jquery.equalheights.js'),
      ]
    )
    .pipe(gulpif(!mode.production, sourcemaps.init()))
    .pipe(concat('vendor.js'))
    .pipe(gulpif(mode.production, uglify()))
    .pipe(gulpif(!mode.production, sourcemaps.write()))
    .pipe(gulp.dest(path.join(config.root.dist, config.js.dist)))
    .pipe(reload({stream: true}));

    return merge(app, vendor);
});