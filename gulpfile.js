let gulp = require('gulp')
const {src, dest, parallel} = require('gulp')

let imagemin = require ('gulp-imagemin')
let concat = require ('gulp-concat')
let minifyCSS = require('gulp-minify-css')

function copyHtml() {
  return src('src/*.html').pipe(gulp.dest('build'))
}

function imgTask() {
  return src('src/images/*.png')
    .pipe(imagemin())
    .pipe(gulp.dest('build/images'))
}

function style() {
  return src('src/*.css')
    .pipe(minifyCSS())
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('build/css'))
}


exports.style = style
exports.imgTask = imgTask
exports.default = parallel(copyHtml, imgTask)



