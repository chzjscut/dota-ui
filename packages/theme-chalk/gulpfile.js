'use strict';

const { series, dest, src } = require('gulp');
const sass = require('gulp-sass')(require('node-sass'));
const autoprefixer = require('gulp-autoprefixer');
//const cssmin = require('gulp-cssmin');
const cleanCSS = require('gulp-clean-css');

function compile() {
  return src('./src/*.scss')
    .pipe(sass.sync())
    .pipe(autoprefixer({
      browsers: ['ie > 9', 'last 2 versions'],
      cascade: false
    }))
    .pipe(cleanCSS())
    .pipe(dest('./lib'));
}

function copyfont() {
  return src('./src/fonts/**')
    .pipe(dest('./lib/fonts'));
}

exports.build = series(compile, copyfont);
