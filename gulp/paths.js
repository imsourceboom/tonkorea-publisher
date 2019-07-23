export default {
    src: './src',
    build: './build',
    script: {
        src: './src/script/**/*.js',
        build: './build/js',
        index: './src/script/index.js'
    },
    sass: {
        src: './src/sass/**/*.scss',
        build: './build/css',
        index: './src/sass/main.scss'
    },
    pug: {
        src: './src/pug/**/*.pug',
        index: './src/pug/index.pug',
        pages: './src/pug/pages/**/*.pug',
        buildIndex: './build',
        buildPages: './build/html'
    },
    html: {
        src: './src/pug/**/*.html',
        build: './build/html',
        index: './index.html'
    },
    image: {
        src: './src/assets/images',
        build: './build/assets/images'
    }
};
