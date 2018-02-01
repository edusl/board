var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
      proxy: "localhost/board"
    });

    gulp.watch("styles/basic/theme/**/*.scss", ['sass']).on('change', browserSync.reload);
    gulp.watch("styles/basic/template/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("styles/basic/theme/**/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("styles/basic/theme/"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
