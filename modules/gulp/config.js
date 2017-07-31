'use strict';

module.exports = {
    sources: {
        index: './src/index.jade',
        pug: './src/app/**/*.jade',
        assets: './src/assets/**/*',
        fonts: './src/fonts/**/*',
        styles: './src/**/*.less',
        scripts: './src/app/**/*.js'
    },
    paths: {
        src: 'src',
        build: 'build',
        es6: true
    }
};
