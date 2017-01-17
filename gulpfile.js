var gulp       = require('gulp');
var less       = require('gulp-less');
var browserify = require('browserify');
var babelify   = require('babelify');
var glob       = require("glob");
var webserver  = require('gulp-webserver');
var clean      = require('gulp-clean');
var source     = require('vinyl-source-stream');
var buffer     = require('vinyl-buffer')
var uglify     = require('gulp-uglify');
var cssmin     = require('gulp-css');
var md5        = require("gulp-md5-plus");
var swig       = require('gulp-swig');
var qs         = require('tiny-qs');


// 清理dist目录
gulp.task('clean', function() {
  return gulp.src('./dist')
    .pipe(clean({force: true}));
});

// 字体
gulp.task('fonts', function() {
  return gulp.src('./src/vendor/fontawesome/*')
    .pipe(gulp.dest('./dist/static/fonts'));
});

// 图片
gulp.task('images', function() {
  return gulp.src('./src/images/*')
    .pipe(gulp.dest('./dist/static/images'));
});


// 开发
gulp.task('d:css', function() {
  return gulp.src('./src/styles/app.less')
    .pipe(less())
    .pipe(gulp.dest('./dist/static/styles'));
});

gulp.task('d:pages', function() {
  return gulp.src([
      './src/pages/**/*.html', 
      '!./src/pages/layouts/*.html',
      '!./src/pages/partials/*.html'
    ])
    .pipe(swig({
      varControls: ['<{', '}>'],
      setup: function(swig) {
        swig.setFilter('url', function(input) {
          if (input == '/') return input;
          var url = '/' + input;
          if (arguments[1]) {
            url += '.html?p=';
          }
          if (arguments[1]) {
            url = genurl(url, arguments[1]);
          }
          return url + '.html';
        });
      }
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('d:js', function() {
  glob("./src/js/*.js", {}, function (er, files) {
    for(var i=0;i<files.length;i++) {
      browserify()
        .add(files[i])
        .transform(babelify, {presets: ["es2015", "stage-3"], "plugins": ["transform-runtime"], compact: false})
        .bundle()
        .pipe(source(files[i].match(/js\/(.*?)\.js/)[1] + '.js'))
        .pipe(gulp.dest('./dist/static/js'));
    }
  });
});

gulp.task('d:webserver', function() {
  gulp.src('./dist')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: false
    }));
  gulp.watch(['src/styles/*.less', 'src/vendor/**/*.less'], ['d:css']);
  gulp.watch(['src/js/*.js', 'src/js/**/*.js'], ['d:js']);
  gulp.watch('src/pages/**/*.html', ['d:pages']);
  gulp.watch('src/images/**', ['images']);
  gulp.watch('src/vendor/fontawesome/**', ['fonts']);
});


gulp.task('d', ['images', 'fonts', 'd:pages', 'd:css', 'd:js'], function() {
  gulp.start('d:webserver');
});


// 发布
gulp.task('p:css', function() {
  return gulp.src('./src/styles/app.less')
    .pipe(less())
    .pipe(cssmin())
    .pipe(md5(10, './dist/**/*.html'))
    .pipe(gulp.dest('./dist/static/styles'));
});

gulp.task('p:pages', function() {
  return gulp.src([
      './src/pages/**/*.html', 
      '!./src/pages/layouts/*.html',
      '!./src/pages/partials/*.html'
    ])
    .pipe(swig({
      varControls: ['<{', '}>'],
      setup: function(swig) {
        swig.setFilter('url', function(input) {
          if (input == '/') return input;
          var url = '/' + input;
          if (arguments[1]) {
            url = genurl(url, arguments[1]);
          }
          return url + '.html';
        });
      }
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('p:js', function() {
  glob("./src/js/*.js", {}, function (er, files) {
    for(var i=0;i<files.length;i++) {
      browserify()
        .add(files[i])
        .transform(babelify, {presets: ["es2015", "stage-3"], "plugins": ["transform-runtime"], compact: false})
        .bundle()
        .pipe(source(files[i].match(/js\/(.*?)\.js/)[1] + '.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(md5(10, './dist/**/*.html'))
        .pipe(gulp.dest('./dist/static/js'));
    }
  });
});

gulp.task('p', ['images', 'fonts', 'p:pages'], function() {
  gulp.start(['p:css', 'p:js']);
});