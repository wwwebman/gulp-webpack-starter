/**
 * Cleaner
 */
const gulp = require('gulp');
const del = require('del');

const config = require('./config');

gulp.task('clean', () => {
  const folderDelete = ['js', 'css', 'img', 'svg', 'fonts'].map(asset =>
    `${config.root.dist}/${config[asset].dist}`
  );

  if (config.html.run) {
    folderDelete.push(`${config.root.dist}/${config.html.dist}/*.html`);
  }

  del.sync(folderDelete, {
    force: true,
  });
});
