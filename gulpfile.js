var path = ".";
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
//
gulp.task('default', ['sass'], function() {
    browserSync.init({
        server: "."
    });

    gulp.watch(path + "/scss/**/*.scss", ['sass']);
    gulp.watch(path + "/index.html").on('change', function(){
        console.log("Reloading");
        browserSync.reload();
    });
});
//Task compile sass
gulp.task('sass', function() {
    return gulp.src(path + "/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest(path + "/css/"))
        .pipe(browserSync.stream());
});
