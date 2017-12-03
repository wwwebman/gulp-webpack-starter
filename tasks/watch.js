/**
 * WATCHER
 */
const gulp = require('gulp');
const watch = require('gulp-watch');
const path = require('path');

const config = require('./config');

gulp.task('watch', ['liveReload'], () => {
  const folders = ['css', 'img', 'svg', 'static', 'fonts', 'js'];

  if (config.html.run) {
    folders.push('html');
  }

  folders.forEach((task) => {
    watch(path.resolve(config.root.dev, config[task].dev), () => {
      gulp.start(task);
    });
  });
});
