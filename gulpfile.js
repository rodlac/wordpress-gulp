var
  gulp = require('gulp'),

  concat = require('gulp-concat'),
  csso = require('gulp-csso'),
  jsmin = require('gulp-jsmin'),
  imagemin = require('gulp-imagemin'),

  paths = {
    root: '',

		styles: 'css/*.css',
    style: 'style.css',

    scripts: 'js/*.js',
		script: 'all.js',

		images: {
      unoptimized: 'img/src/*',
      optimized: 'img'
    }
	};

gulp.task('styles', function() {

  gulp
  .src(paths.styles)
  .pipe(concat(paths.style))
  .pipe(csso())
  .pipe(gulp.dest(paths.root));

});

gulp.task('scripts', function() {

  gulp
  .src(paths.scripts)
  .pipe(concat(paths.script))
  .pipe(jsmin())
  .pipe(gulp.dest(paths.root));

});

gulp.task('images', function() {

  gulp
  .src(paths.images.unoptimized)
  .pipe(imagemin())
  .pipe(gulp.dest(paths.images.optimized));

});

gulp.task('watch', function() {

  gulp.watch(paths.styles, ['styles']);
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.images.unoptimized, ['images']);

});

gulp.task('default', ['watch']);