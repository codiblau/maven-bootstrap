const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const { series } = require('gulp');

//function buildStyles() {
//    return gulp.src('./node_modules/bootstrap/**/*.scss')
//        .pipe(sass().on('error', sass.logError))
//        .pipe(gulp.dest('./src/main/resources/static/css'));
//}

function buildStyles() {
    return gulp.src('./src/main/resources/static/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/main/resources/static/css'));
}

exports.compila = buildStyles;
