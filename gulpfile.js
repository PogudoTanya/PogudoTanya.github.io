var gulp = require('gulp');
var rename = require("gulp-rename");
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var nested = require('postcss-nested')
var short = require('postcss-short')
var cssnano = require('cssnano')


gulp.task('css', function () {
    var plugins = [
        autoprefixer({overrideBrowserslist: ['last 2 versions'] }),
        nested,
        short,
      /*  cssnano(),*/
    ];
    return gulp.src('./styles/style.css')
        .pipe(postcss(plugins))
        .pipe(rename("styleout.css"))
        .pipe(gulp.dest('./styles/'));
});


