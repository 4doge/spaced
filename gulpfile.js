const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

gulp.task('browserSync', () => {
    browserSync.init({
        server: {
            baseDir: './'
        },
    })
});

gulp.task('sass', () => {
    return gulp.src('src/sass/app.sass')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('watch', ['browserSync', 'sass'], () => {
    gulp.watch('src/sass/*.sass', ['sass']);
    gulp.watch('*.html', browserSync.reload);
});


gulp.task('default', ['watch']);
