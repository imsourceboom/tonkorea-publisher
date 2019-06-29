import { watch, series, parallel } from 'gulp';

import clean from './gulp/clean';
import pug from './gulp/pug';
import sass from './gulp/sass';
import script from './gulp/script';
import browserSync from './gulp/browserSync';

import paths from './gulp/paths';

watch(paths.pug.src, pug);
watch(paths.sass.src, sass);
watch(paths.script.src, script);

export default series(clean, parallel(pug, sass, script), browserSync);
