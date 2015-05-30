var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');
var config = require('../config');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var filter = require('gulp-filter');

gulp.task('sass:compile', function() {
    return sass(config.paths.sass + 'main.sass', config.sassConfig)
        .pipe(sourcemaps.write(''))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(config.paths.css))
        .pipe(filter('**/*.css'))
        .pipe(reload({ stream: true}));
});

gulp.task('sass:watch', function() {
    gulp.watch(config.paths.sass + '**/*', ['sass:compile']);
});