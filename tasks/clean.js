/**
 * Cleaner
 */

var gulp   = require('gulp');
var del    = require('del');

var config = require('../config');

gulp.task('clean', function(){
	var folderDelete = [config.root.dist];
	if (config.root.dist === './') folderDelete.push('./assets', '*.html');
	del.sync(folderDelete);
});
