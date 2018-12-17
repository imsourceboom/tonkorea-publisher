'use strict';

const path = require('path');
const gulp = require('gulp');
const browserSync = require('browser-sync');
const gutil = require('gulp-util');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const pug = require('gulp-pug');
const del = require('del');
const runSequence = require('run-sequence');
const sourcemaps = require('gulp-sourcemaps');
const webpack = require('webpack-stream');

const conf = {
    paths: {
        src: './src',
        dist: './dist',
        js: {
            src: './src/es6/**/*.js',
            dist: './dist/js',
            index: './src/es6/index.js'
        },
        sass: {
            src: './src/sass/**/*.scss',
            dist: './dist/css'
        },
        pug: {
            src: './src/pug/**/*.pug',
            dist: './dist/html'
        },
        html: {
            src: './src/pug/**/*.html',
            dist: './dist/html',
            index: '/html/index.html'
        }
    },
    errorHandler: function(title) {
        return function(err) {
            gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
            this.emit('end');
        };
    },
    sass: {
        process: {
            errLogToConsole: true,
            outputStyle: 'compressed'
        },
        autoprefixer: {
            // https://github.com/ai/browserslist
            browsers: ['last 2 versions', '> 1% in KR', 'ie 8-11'],
            cascade: false,
            grid: true
        }
    }
};

/**
 *  Default task
 */
gulp.task('default', function() {
    runSequence('clean', 'run_source', 'watch', 'serve');
});

gulp.task('run_source', function() {
    runSequence('pug', 'html', 'sass', 'js');
});

gulp.task('pug', [], function buildHTML() {
    const pugErrHandler = conf.errorHandler('pug');
    return gulp
        .src(conf.paths.pug.src)
        .pipe(pug({ pretty: true }).on('error', pugErrHandler))
        .pipe(gulp.dest(conf.paths.pug.dist))
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task('html', [], function() {
    return gulp
        .src(conf.paths.html.src)
        .pipe(gulp.dest(conf.paths.html.dist))
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task('sass', [], function() {
    const sassErrHandler = conf.errorHandler('sass');
    gulp.src(conf.paths.sass.src)
        .pipe(sourcemaps.init()) // init sourcemaps
        .pipe(sass(conf.sass.process).on('error', sassErrHandler))
        .pipe(autoprefixer(conf.sass.autoprefixer))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(conf.paths.sass.dist))
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task('js', [], function buildHTML() {
    const jsErrHandler = conf.errorHandler('js');
    return gulp
        .src(conf.paths.js.index)
        .pipe(
            webpack({
                entry: {
                    app: conf.paths.js.index
                },
                output: {
                    filename: '[name].js'
                },
                module: {
                    rules: [
                        {
                            use: {
                                loader: 'babel-loader',
                                options: {
                                    presets: ['@babel/preset-env']
                                }
                            }
                        }
                    ]
                },
                devtool: 'source-map',
                mode: 'production'
            })
        )
        .pipe(gulp.dest(conf.paths.js.dist))
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task('clean', function() {
    del(['./dist/assets/**/*']);
    del(['./dist/page/**/*']);
});

/**
 * open local server for livereload
 */
gulp.task('serve', function() {
    browserSync.instance = browserSync.init({
        // startPath: '/html/index.html',
        startPath: conf.paths.html.index,
        server: {
            baseDir: `${conf.paths.dist}`,
            directory: true
        },
        port: 4000,
        open: true
    });
});

/**
 * watch source files
 */
gulp.task('watch', function() {
    gulp.watch(path.join(conf.paths.src, '/**/*.pug'), ['pug']);
    gulp.watch(path.join(conf.paths.src, '/**/*.html'), ['html']);
    gulp.watch(
        [path.join(conf.paths.src, '/**/*.scss'), path.join(conf.paths.src, '/**/*.sass')],
        ['sass']
    );

    gulp.watch([path.join(conf.paths.src, '/**/*.js')], ['js']);
});

gulp.task('reload', function() {
    browserSync.reload({ stream: true });
});
