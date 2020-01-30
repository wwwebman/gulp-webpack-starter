const gUtil = require('gulp-util');

function Log(taskName, message) {
  this.error = function error() {
    throw new gUtil.PluginError({
      plugin: taskName,
      message: gUtil.colors.red(message),
    });
  };
  this.info = function info() {
    gUtil.log(taskName, gUtil.colors.magenta(message));
  };
}

module.exports = Log;
