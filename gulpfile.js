var gulp       = require('gulp');
var sass       = require('gulp-sass');
var concat     = require('gulp-concat');
var uglify 	   = require('gulp-uglify');
var cleanCSS   = require('gulp-clean-css');
var sftp	   = require('gulp-sftp');
var rename	   = require('gulp-rename');
var transform  = require('vinyl-transform');
var bower      = 'bower_components/';

gulp.task('watch', ['scripts','sass'], function(){
	gulp.watch('scss/**/*.scss',['sass']);
	gulp.watch('js/**/*.js',['scripts']);
});

gulp.task('sass', function(){
	return gulp.src([
			bower + 'slick-carousel/slick/slick.css',
			bower + 'bootstrap/dist/css/bootstrap.min.css',
			'scss/app.scss'
		])
		.pipe(sass())
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(concat('app.css'))
		.pipe(gulp.dest('dist/css'));
});
 
gulp.task('scripts', function() {
	return gulp.src([
			bower + 'jquery/dist/jquery.min.js',
			bower + 'angular/angular.min.js',
			bower + 'angular-sanitize/angular-sanitize.min.js',
			bower + 'gsap/src/minified/TweenMax.min.js',
			bower + 'gsap/src/minified/TimelineMax.min.js',
			bower + 'slick-carousel/slick/slick.js',
			bower + 'angular-slick-carousel/dist/angular-slick.min.js',
			bower + 'velocity/velocity.min.js',
			bower + 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js',
			bower + 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js',
			bower + 'scrollmagic/scrollmagic/uncompressed/plugins/animation.velocity.js',
			bower + 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js',
			bower + 'scrollmagic/scrollmagic/uncompressed/plugins/jquery.ScrollMagic.js',
			bower + 'angular-scroll-magic/angular-scroll-magic.js',
			'js/**/*.js'
		])
	    .pipe(concat('main.js'))
	    .pipe(gulp.dest('dist/js'));
});