/**
 * WATCHER
 */

var gulp   = require ('gulp');
var watch  = require ('gulp-watch');
var path   = require('path');

var config = require('../config');

var watchTask = function(){
	var folders = ['html', 'css', 'img', 'svg', 'static', 'fonts'];

    folders.forEach(function(task) {
        watch(path.join(config.root.dev, config[task].dev), function() {
            gulp.start(task);
        });
    });
};

gulp.task('watch', ['live'], watchTask);