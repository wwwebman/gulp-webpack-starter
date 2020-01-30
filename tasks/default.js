const gulp = require('gulp');
const runSequence = require('run-sequence');

const config = require('../config');

const assets = ['images', 'fonts', 'static', 'sprite'];

if (config.html.run) {
  assets.push('html');
}

gulp.task('default', (cb) => {
  config.production
    ? runSequence('clean', assets, ['css', 'js'], 'sizeReport', cb)
    : runSequence(assets, 'css', 'watch', cb);
});
