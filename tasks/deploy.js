/**
 * Deploy task
 */
const gulp = require('gulp');
const path = require('path');
const ftp = require('vinyl-ftp');
const gutil = require('gulp-util');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const prompt = require('gulp-prompt');

const Log = require('./lib/logger');
const mode = require('./lib/mode');
const config = require('./config');

const connConf = {
  host: config.deploy.hostname,
  user: config.deploy.username,
  password: config.deploy.password,
  parallel: 10,
  log: gutil.log,
};

const conn = ftp.create(connConf);

/**
 * You can use bash instead or some other solution.
 * @todo implement something more secure.
 */
gulp.task('deploy', () => {
  let folderToPush = [path.join(config.root.dist, '/**')];

  if (config.root.dist === './') {
    folderToPush = ['./assets', '*.+(html|php)'];
  }

  if (!mode.production) {
    new Log(
      'Deploy Task',
      'You can run Deploy Task only in Production Mode.\nUse: npm run deploy',
    ).error();
  }

  return gulp
    .src(folderToPush, { buffer: false })
    .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
    .pipe(prompt.confirm({
      message: 'Heads Up! Check ../config.json & Confirm deploy',
      default: false,
    }))
    .pipe(conn.newer(config.deploy.path))
    .pipe(conn.dest(config.deploy.path));
});
