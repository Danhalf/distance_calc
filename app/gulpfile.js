const gulp = require('gulp');
const browserSync = require('browser-sync').create();

// Static server
// gulp.task('browser-sync', function () {
//    browserSync.init({
//       server: {
//          baseDir: "./"
//       }
//    });

//    gulp.watch("*.html").on("change", reload);
// });

// or...

gulp.task('browser-sync', function () {
  browserSync.init({
    // proxy: "distancecalc/",
    proxy: 'rangecalc/',
    notify: false,
  });
});

gulp.task('watch', () => {
  gulp.watch('*.php').on('change', browserSync.reload);
  gulp.watch('*.js').on('change', browserSync.reload);
  gulp.watch('*.css').on('change', browserSync.reload);
});

gulp.task('default', gulp.parallel('browser-sync', 'watch'));
