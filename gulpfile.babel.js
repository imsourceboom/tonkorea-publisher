import { watch, series, parallel } from 'gulp';

import clean from './gulp/clean';
import pug from './gulp/pug';
import sass from './gulp/sass';
import script from './gulp/script';
import image from './gulp/image';
import browserSync from './gulp/browserSync';

import paths from './gulp/paths';

watch(paths.pug.src, pug);
watch(paths.sass.src, sass);
watch(paths.script.src, script);
watch(paths.image.src, image);

export default series(clean, parallel(pug, sass, script, image), browserSync);
