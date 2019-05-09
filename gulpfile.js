
var gulp = require('gulp');
var fileinclude  = require('gulp-file-include');

gulp.task('fileinclude', function() {
  
    gulp.src(['./index.html', "./app/**"], {base: './'})
        .pipe(fileinclude({
          prefix: '@@',
          basepath: '@file'
        }))
    .pipe(gulp.dest('./dist'));
});
 
gulp.task('default', ['fileinclude']);
