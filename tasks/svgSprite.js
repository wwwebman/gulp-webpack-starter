/**
 * Build svg sprite
 */

var gulp        = require ('gulp');
var browserSync = require ('browser-sync');
var reload      = browserSync.reload;
var imagemin    = require ('gulp-imagemin');
var notify      = require("gulp-notify");
var plumber     = require('gulp-plumber');
var svgSprite   = require('gulp-svg-sprites');
var path        = require("path");

var config      = require("../config");
var mode        = require("./helpers/mode");	


console.log(path.resolve(config.root.dev, config.css.dev, 'parts/vendor/_sprite.scss'));

gulp.task("svg", function(){
	return gulp.src(path.join(config.root.dev, config.svg.dev, '*.svg'))
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(svgSprite({
        /**
         * Put css file in dev/sass/vandor/_sprite to make concatenation > main.css
         * @type - fix
         */
        cssFile: path.join('../../../../', config.root.dev, config.css.dev, 'parts/vendor/_sprite.scss'),
        baseSize: 16,
        preview: false,
        svgPath: '../img/svg/%f',
        svg: {
            sprite: "sprite.svg"
        }
    }))
    .pipe(gulp.dest(path.join(config.root.dist, config.svg.dist)))
    .pipe(reload({stream: true}));
});