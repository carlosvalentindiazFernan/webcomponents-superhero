var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

gulp.task('connect', ()=>{
  connect.server({
    root: 'build',
    livereload: true
  });
});


gulp.task('html', function(){
  return gulp.src('src/templates/**/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('./build/templates'))
    .pipe(connect.reload());
  });

  gulp.task('htmlHome', function(){
    return gulp.src('./src/index.pug')
      .pipe(pug())
      .pipe(gulp.dest('./build'))
      .pipe(connect.reload());
    });

  
gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css'))
    .pipe(connect.reload());

  });


gulp.task('js',()=>{
  gulp.src('./src/js/*.js')
      .pipe(gulp.dest('./build/js'))
      .pipe(connect.reload());
});

  
gulp.task('img',()=>{
  gulp.src('./src/img/**')
      .pipe(gulp.dest('./build/img'))
      .pipe(connect.reload());
});

gulp.task('fonts',()=>{
  gulp.src('./src/fonts/**/*.ttf')
      .pipe(gulp.dest('./build/fonts'))
      .pipe(connect.reload());
});


gulp.task('normalize',()=>{
  gulp.src('./node_modules/normalize.css/*.css')
      .pipe(gulp.dest('./build/css'))
      .pipe(connect.reload());
});


gulp.task('watch', function () {
  gulp.watch('./src/sass/**/*.sass', ['sass']);
  gulp.watch('./src/templates/*.pug',['html']);
  gulp.watch('./src/js/**/*.js',['js']);
  gulp.watch('./src/img/**/*.jpeg',['img']);
  gulp.watch('./src/index.pug',['htmlHome']);

});


gulp.task('default', ['html','htmlHome','sass','js',
   'img','fonts','normalize','watch' ,'connect' ]);
