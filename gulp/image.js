import { src, dest } from 'gulp';
import imagemin from 'gulp-imagemin';
import changed from 'gulp-changed';

import paths from './paths';

const imageSet = () => {
    return new Promise(resolve => {
        src(paths.image.src + '/**/*.{png,jpg,jpeg,gif,svg}')
            .pipe(changed(paths.image.build))
            .pipe(
                imagemin({
                    progressive: true,
                    interlaced: true,
                    optimizationLevel: 7,
                    svgoPlugins: [{ removeViewBox: false }],
                    verbose: true,
                    use: []
                })
            )
            .pipe(dest(paths.image.build));
        resolve();
    });
};

export default imageSet;
