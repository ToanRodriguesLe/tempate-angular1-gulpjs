var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: 'www'
        }
    });
});

gulp.task('sass', function () {
    return gulp.src('www/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('www/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('watch', ['browserSync', 'sass'], function () {
    gulp.watch('www/scss/**/*.scss', ['sass']); 
    gulp.watch('www/*.html', browserSync.reload); 
    gulp.watch('www/**/*.html', browserSync.reload); 
    gulp.watch('www/js/**/*.js', browserSync.reload); 
});