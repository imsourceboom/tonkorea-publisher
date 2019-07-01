import { src, dest } from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import { reload } from 'browser-sync';

import paths from './paths';
import errorHandler from './errorHandler';

const sassConfig = {
    process: {
        errLogToConsole: true,
        outputStyle: 'compressed'
    },
    autoprefixer: {
        // https://github.com/ai/browserslist
        // browsers: ['last 2 versions', '> 1% in KR', 'ie 8-11'],
        cascade: false,
        grid: true
    }
};

const sassSet = () => {
    return new Promise(resolve => {
        const sassErrHandler = errorHandler('sass');
        src(paths.sass.index)
            .pipe(sourcemaps.init())
            .pipe(sass(sassConfig.process).on('error', sassErrHandler))
            .pipe(autoprefixer(sassConfig.autoprefixer))
            .pipe(sourcemaps.write('.'))
            .pipe(dest(paths.sass.build))
            .pipe(
                reload({
                    stream: true
                })
            );
        resolve();
    });
};

export default sassSet;
