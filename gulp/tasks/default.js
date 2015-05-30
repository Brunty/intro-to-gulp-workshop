var gulp = require('gulp');
gulp.task('default', ['browser-sync:init', 'sass:compile', 'sass:watch']);