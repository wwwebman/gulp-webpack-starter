/**
 * Size report
 */

var gulp      = require('gulp');
var sizereport= require('gulp-sizereport');
var path      = require('path');

var config    = require('../config.json');
var mode      = require('./helpers/mode');

gulp.task('size', function(){
	return gulp.src(path.join(config.root.dist, 'assets/**/*.+(css|js)'))
    .pipe(sizereport());
});