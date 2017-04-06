/**
 * WATCHER
 */

var gulp   = require ('gulp');
var watch  = require ('gulp-watch');
var path   = require('path');

var config = require('../config');

var watchTask = function(){
	var folders = ['css', 'img', 'svg', 'static', 'fonts', 'js'];
	
	config.proxy
	? folders.unshift('php')
	: folders.unshift('html');

    folders.forEach(function(task) {
        watch(path.resolve(config.root.dev, config[task].dev), function() {
            gulp.start(task);
        });
    });
};

gulp.task('watch', ['live'], watchTask);
