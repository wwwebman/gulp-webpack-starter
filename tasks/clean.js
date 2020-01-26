const gulp = require('gulp');
const del = require('del');
const Log = require('./lib/logger');

const config = require('../config');

gulp.task('clean', () => {

  const folderDelete = ['js', 'css', 'images', 'svg', 'fonts'].map(asset => {
    if (!config[ asset ] || !config[ asset ].dist) {
      return new Log(
        'clear',
        'Task is not exist or dist folder was not specified properly.'
      ).error();
    }

    return `${config.root.dist}/${config[ asset ].dist}`;
  });

  if (config.html.run) {
    folderDelete.push(`${config.root.dist}/${config.html.dist}/*.html`);
  }

  del.sync(folderDelete, {
    force: config.cleanFilesOutsideWorkingDir,
  });
});
