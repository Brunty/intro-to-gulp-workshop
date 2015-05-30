var browserSync = require('browser-sync');
var gulp = require('gulp');

gulp.task('browser-sync:init', function() {
    browserSync({
        proxy: 'http://workshop.gulp'
    });
});