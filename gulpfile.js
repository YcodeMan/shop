
var gulp = require('gulp');
var fileinclude  = require('gulp-file-include');

gulp.task('fileinclude', function() {
  
    gulp.src([
       "./app/**/**.html", 
       "./app/**/**.css", 
       "./app/**/**.js",
       "./app/**/**.json",
       "./app/**/**.php"
    ], {base: './'})
        .pipe(fileinclude({
          prefix: '@@',
          basepath: '@file'
        }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('copyImg', function() {
  gulp.src('./app/img/*')
  .pipe(gulp.dest('./dist/app/img/'));
});

 
gulp.task('default', ['fileinclude','copyImg']);
