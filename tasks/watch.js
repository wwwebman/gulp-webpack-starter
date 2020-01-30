const gulp = require('gulp');
const path = require('path');
const watch = require('gulp-watch');

const config = require('../config');

const Log = require('./lib/logger');

gulp.task('watch', ['liveReload'], () => {
  const tasksToWatch = ['css', 'images', 'sprite', 'static', 'fonts', 'js'];

  if (config.html.run) {
    tasksToWatch.push('html');
  }

  tasksToWatch.forEach((task) => {
    if (!config[ task ]) {
      return new Log('watch', `Task "${task}" is not exist.`).error();
    }

    watch(path.resolve(config.root.dev, config[task].dev), () => {
      gulp.start(task);
    });
  });
});
