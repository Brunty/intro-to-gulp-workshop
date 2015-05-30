var gutil = require('gulp-util');

var usesourcemaps = true;

if(gutil.env.prod === true) {
    usesourcemaps = false;
}

module.exports = {
    paths: {
        sass: 'resources/sass/',
        css: 'public/css/'
    },
    sassConfig: {
        style: 'compressed',
        sourcemap: usesourcemaps,
        verbose: true
    }
};