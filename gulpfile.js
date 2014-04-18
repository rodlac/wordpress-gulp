var
  gulp = require('gulp'),

  concat = require('gulp-concat'),
  csso = require('gulp-csso'),
  jsmin = require('gulp-jsmin'),
  imagemin = require('gulp-imagemin'),

  paths = {
    root: '',

    styles: {
      src: 'css/*.css',
      dest: 'style.css'
    },

    scripts: {
      src: 'js/*.js',
      dest: 'all.js'
    },

		images: {
      src: 'img/src/*',
      dest: 'img/'
    }
	};

gulp.task('styles', function() {

  gulp
  .src(paths.styles.src)
  .pipe(concat(paths.styles.dest))
  .pipe(csso())
  .pipe(gulp.dest(paths.root));

});

gulp.task('scripts', function() {

  gulp
  .src(paths.scripts.src)
  .pipe(concat(paths.scripts.dest))
  .pipe(jsmin())
  .pipe(gulp.dest(paths.root));

});

gulp.task('images', function() {

  gulp
  .src(paths.images.src)
  .pipe(imagemin())
  .pipe(gulp.dest(paths.images.dest));

});

gulp.task('watch', function() {

  gulp.watch(paths.styles.src, ['styles']);
  gulp.watch(paths.scripts.src, ['scripts']);
  gulp.watch(paths.images.src, ['images']);

});

gulp.task('default', ['watch']);