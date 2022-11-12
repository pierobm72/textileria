const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function css(done) {
    gulp.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css'))

    done()
  }

function image(done){
    gulp.src('./src/img/**/*')
        .pipe(imagemin({optimizationLevel: 5}))
        .pipe(gulp.dest('./build/img'))
    done();
}

function watch(done){
  gulp.watch('./src/scss/**/*.scss',css)
  gulp.watch('./src/img/**/*',image)
 
  done()
}

exports.default = gulp.series(css,watch)
exports.dev = watch;
exports.image = image;