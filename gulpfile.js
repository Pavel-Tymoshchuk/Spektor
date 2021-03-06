var gulp=require('gulp'), browserSync=require('browser-sync').create(), less=require('gulp-less'), autoprefixer=require('gulp-autoprefixer');
// Static Server + watching scss/html files
gulp.task('serve', ['less'], function() {

    browserSync.init({
        server: "../Spektor"
    });
    gulp.watch("less/*.less", ['less']);
    gulp.watch("less/index/*.less", ['less']);
    gulp.watch("less/events/*.less", ['less']);
    gulp.watch("less/event-page/*.less", ['less']);
    gulp.watch("less/news/*.less", ['less']);
    gulp.watch("less/article/*.less", ['less']);
    // gulp.watch("less/*.less").on('change', browserSync.reload);
    // gulp.watch("less/index/*.less").on('change', browserSync.reload);
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("documents/*.html").on('change', browserSync.reload);
    gulp.watch("js/*.js").on('change', browserSync.reload);
});

gulp.task('default', ['serve'],() =>
    gulp.src('css/main.css')
        .pipe(autoprefixer({
            browsers: ['last 2 version', 'safari 5', 'ie 10', 'opera 12.1', 'ios 7', 'android 4'],
            cascade: false,
        }))
        .pipe(gulp.dest('css/autoprefixer'))
);

var less = require('gulp-less');
var path = require('path');
 
gulp.task('less', function () {
  return [gulp.src('less/index/mainIndex.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./css')),
    gulp.src('less/events/mainEvents.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./css')),
    gulp.src('less/event-page/mainEventPage.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./css')),
    gulp.src('less/news/mainNews.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./css')),
    gulp.src('less/article/mainArticle.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./css')),
    ]
});