/**
 * Build JS
 */

var gulp          = require('gulp');
var webpack       = require('webpack');
var gutil         = require('gulp-util');

var webpackConfig = require('./helpers/webpackConfig')();
var mode          = require('./helpers/mode');
var log           = require('./helpers/logger');

gulp.task('js', function(callback){
	webpack(webpackConfig, function(err, stats) {
        if(err) new log('Webpack', err).error();
        new log('Webpack',stats.toString({
            assets: true,
            chunks: false,
            chunkModules: false,
            colors: true,
            hash: false,
            timings: true,
            version: false
        })).info();
        callback();
    });
});