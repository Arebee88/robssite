var gulp = require('gulp');

var lost = require('lost'),
    cssnext = require('postcss-cssnext'),
    rucksack = require('gulp-rucksack'),
    postcss = require('gulp-postcss'),
    cssImport = require('postcss-import'),
    //autoprefix = require('autoprefixer'),
    cssNested = require('postcss-nested');


var srcCss = './public/stylesheets/source/**/*.css';
var dstCss = './public/stylesheets';
var watchCss = './public/stylesheets/source/**/.*.css';

gulp.task('styles', function () {
    var processors =
        [
            cssImport,
            cssnext({}),
            //autoprefix({browsers: ['last 2 version']}),
            lost,
            cssNested()
        ];

    return gulp.src(srcCss)
        .pipe(postcss(processors))
        .pipe(rucksack())
        .pipe(gulp.dest(dstCss));
});

gulp.task('w:st', function () {
    gulp.watch(watchCss, ['styles']);
});


gulp.task('default', function () {

});