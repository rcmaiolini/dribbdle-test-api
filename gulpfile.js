var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    scsslint = require('gulp-scss-lint'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload,
    jshint = require('gulp-jshint'),
    jshintStylish = require('jshint-stylish'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    htmlmin = require('gulp-htmlmin'),
    cleanCSS = require('gulp-clean-css'),
    runSequence = require('run-sequence'),
    usemin = require('gulp-usemin'),
    rev = require('gulp-rev');

// BUILD TASKS
gulp.task('clean', function() {
  return gulp.src('dist/')
  .pipe(clean());
});

gulp.task('copy', function() {
	return gulp.src('public/*.html')
		.pipe(gulp.dest('dist'));
});

gulp.task('fonts', function() {
	return gulp.src('public/fonts/**/*.*')
		.pipe(gulp.dest('dist/fonts'));
});

gulp.task('minHtml', function() {
  return gulp.src('public/partials/*.html')
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest('dist/partials'));
});

gulp.task('usemin', ['copy'], function() {
  return gulp.src('public/*.html')
    .pipe(usemin({
      css: [
        autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }),
        cleanCSS(),
        rev()
      ],
      js: [
        uglify(),
        rev()
      ],
      components: [
        uglify(),
        rev()
      ]
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('buildImg', function() {
  return gulp.src('public/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'));
});

// WATCH TASKS
gulp.task('scsslint', function() {
  return gulp.src('public/scss/**/*.scss')
    .pipe(scsslint({
      'bundleExec': true
    }));
});

gulp.task('buildSass', function() {
  gulp.src('public/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('public/css'));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "public/"
        }
    });
});

gulp.task('server', ['browser-sync'], function(){
  gulp.watch(['public/**/*'], reload);

  gulp.watch('public/scss/**/*.scss', ['scsslint', 'buildSass']);

  gulp.watch('public/js/**/*.js').on('change', function(event) {
    console.log("Linting " + event.path);
    gulp.src(event.path)
      .pipe(jshint())
      .pipe(jshint.reporter(jshintStylish));
  });
});

gulp.task('build', function(callback) {
  return runSequence('clean', ['fonts', 'buildImg', 'minHtml', 'usemin'], callback);
});
