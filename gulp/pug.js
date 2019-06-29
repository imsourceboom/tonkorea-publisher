import { src, dest } from 'gulp';
import pug from 'gulp-pug';
import merge from 'merge-stream';
import { reload } from 'browser-sync';

import errorHandler from './errorHandler';
import paths from './paths';

const pugSet = () => {
    return new Promise(resolve => {
        const pugErrHandler = errorHandler('pug');
        let indexPug = src(paths.pug.index)
            .pipe(
                pug({
                    pretty: true
                }).on('error', pugErrHandler)
            )
            .pipe(dest(paths.pug.buildIndex))
            .pipe(
                reload({
                    stream: true
                })
            );
        let pagesPug = src(paths.pug.pages)
            .pipe(
                pug({
                    pretty: true
                }).on('error', pugErrHandler)
            )
            .pipe(dest(paths.pug.buildPages))
            .pipe(
                reload({
                    stream: true
                })
            );
        resolve(merge(indexPug, pagesPug));
    });
};

export default pugSet;
