'use strict';

/**
 * 
 * @author: Dmytro Chumak, http://webman.pro
 * More: https://github.com/wwwebman/gulp-webpack-starter
 * 
 * You can add any task to catalog /tasks.
 * 
*/

var requireDir = require('require-dir');

requireDir('./tasks', {recurse: true});
