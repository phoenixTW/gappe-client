'use strict';
var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var run = require('gulp-run');

var PATH = {
    SASS: './src/app/**/*.scss'
};

var TASKS = {
    DEFAULT: "default",
    COMPILE_SASS: "sass",
    WATCH: "watch",
    SERVE: "serve"
};

gulp.task(TASKS.DEFAULT, ['sass']);

gulp.task(TASKS.COMPILE_SASS, function(done) {
    gulp.src(PATH.SASS)
        .pipe(sass({
            errLogToConsole: true,
            outputStyle: 'compressed'
        }))
        .pipe(concat('custom'))
        .pipe(gulp.dest('./www/build/'))
        .pipe(cleanCSS({
            keepSpecialComments: 0
        }))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest('./www/build/'))
        .on('end', done);
});

gulp.task(TASKS.SERVE, function (done) {
    return run("ionic serve").exec()
        .on('end', done);

});

gulp.task(TASKS.WATCH, function() {
    gulp.watch(PATH.SASS, ['sass']);
});
