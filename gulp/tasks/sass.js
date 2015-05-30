var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');
var config = require('../config');

gulp.task('sass:compile', function() {
    return sass(config.paths.sass + 'main.sass', config.sassConfig)
        .pipe(sourcemaps.write(''))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(config.paths.css));
});

gulp.task('sass:watch', function() {
    gulp.watch(config.paths.sass + '**/*', ['sass:compile']);
});