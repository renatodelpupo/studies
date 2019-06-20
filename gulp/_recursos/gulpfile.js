//'use strict';

const gulp = require('gulp');
//var sass = require('gulp-sass');
const uglify = require('gulp-uglify');
//var pipeline = require('readable-stream').pipeline; // Necessário para o gulp-uglify
const babel = require('gulp-babel');
const browserSync = require('browser-sync').create();

// Fonte
const fontes = {
  sass: ['./sass/campanha.scss']
}


// Compilar SASS/SCSS em CSS
gulp.task('sass', function() {
  return gulp.src(fontes.sass)
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(gulp.dest('../css'))
  .pipe(browserSync.stream());
})

// Escutar mudanças no SASS/SCSS
/*gulp.task('sass:watch', function() {
  gulp.watch('./sass/campanha.scss', ['sass']);
});*/

/*gulp.task('compress', function() {
  return pipeline(
    gulp.src('../js'),
    uglify(),
    gulp.dest('../js')
  );
});*/

gulp.task('default', () =>
    gulp.src('js/indice.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('../js'))
);

gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "wine.mkt.br/clubewine/wineprime/kit-tem-que-ter/"
    });
    //gulp.watch('sass/*.scss', ['sass']);
    //gulp.watch('../index.html').on('change', browserSync.reload);
});
