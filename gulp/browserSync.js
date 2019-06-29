import browserSync from 'browser-sync';
import paths from './paths';

const browserSet = () => {
    return new Promise(resolve => {
        browserSync.instance = browserSync.init({
            startPath: paths.html.index,
            server: {
                baseDir: `${paths.build}`,
                directory: true
            },
            port: 4000,
            open: true
        });
        resolve();
    });
};

export default browserSet;
