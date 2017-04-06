/**
 * Build svg sprite
 */

var gulp        = require ('gulp');
var browserSync = require ('browser-sync');
var reload      = browserSync.reload;
var imagemin    = require ('gulp-imagemin');
var notify      = require("gulp-notify");
var plumber     = require('gulp-plumber');
var svgSprite   = require('gulp-svg-sprite');
var path        = require("path");

var config      = require("../config");
var mode        = require("./helpers/mode");

var svgConf = {
    shape: {
        spacing: { 
            padding: 10 
        },
        dimension       : {
            maxWidth    : 32,
            maxHeight   : 32
        },
    },
    mode: {
        css: {
            dimensions: true,
            common: 'icon',
            layout: "vertical",
            prefix: '.icon-',
            bust: false,
            dest : './',
            sprite: '../img/svg/sprite.svg',
            render: {
                scss: {
                    /**
                     * This one put SCSS file to dev/sass/vendor/_sprite.scss to have just one bundle.css
                     * @type - fix
                     */
                    dest : path.join('../../../', config.root.dev, config.css.dev, 'parts/vendor/_sprite.scss'),
                }
            }
        }
    }
}

gulp.task("svg", function(){
    return gulp.src(path.join(config.root.dev, config.svg.dev, '*.svg'))
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(svgSprite(svgConf))
    .pipe(gulp.dest(path.join(config.root.dist, config.svg.dist)))
    .pipe(reload({stream: true}));
});

/**
 * Mixin - for making sprites more PRO
 * @source - https://www.liquidlight.co.uk/blog/article/creating-svg-sprites-using-gulp-and-sass
 */