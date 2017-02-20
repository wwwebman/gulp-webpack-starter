/**
 * Return true if ENV is --production
 * @returns {object}
 */

var gutil = require('gulp-util');

module.exports = {
	production: gutil.env.production,
	show: function(){
		var info = this.production ? 'Production Mode' : 'Development Mode';
		console.log("\n[ " + info + " Launched ]\n");
	}
}
