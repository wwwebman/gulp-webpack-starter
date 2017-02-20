/**
 * Throw error
 */

var gutil = require('gulp-util');

module.exports = function(taskName, message){
	this.error = function(){
		throw new gutil.PluginError({
		  plugin: taskName,
		  message: gutil.colors.red(message)
		});
	};
	this.info = function(){
		 gutil.log(taskName, gutil.colors.magenta(message));
	};
};