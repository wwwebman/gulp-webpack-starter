const gulp = require('gulp');
const del = require('del');

const config = require('../config');

const Log = require('./lib/logger');

gulp.task('clean', () => {
  const tasksFoldersToDelete = ['js', 'css', 'images', 'sprite', 'fonts'].map(task => {
    if (!config[ task ] || !config[ task ].dist) {
      return new Log(
        'clear',
        `Task "${task}" is NOT exist or dist folder was not specified properly.`
      ).error();
    }

    return `${config.root.dist}/${config[ task ].dist}`;
  });

  if (config.html.run) {
    tasksFoldersToDelete.push(`${config.root.dist}/${config.html.dist}/*.html`);
  }

  del.sync(tasksFoldersToDelete, {
    force: config.cleanFilesOutsideWorkingDir,
  });
});
