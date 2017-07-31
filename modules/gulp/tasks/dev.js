'use strict';

const gulp = require('gulp');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const pug = require('gulp-pug');
const plumber = require('gulp-plumber');
const del = require('del');
const path = require('path');
const _ = require('lodash');
const glob = require('glob');
const es = require('event-stream');
const filter = require('gulp-filter');
const html2js = require('gulp-ng-html2js');
const concat = require('gulp-concat');
const annotate = require('gulp-ng-annotate');
const uglifycss = require('gulp-uglifycss');
const babel = require('gulp-babel');
const server = require( 'gulp-develop-server' );


const files = require('../build-files/index.js');
const helpers = require('../helpers/index.js');
const config = require('../config.js');


/**
 * @description
 * Task `scripts:dev`.
 * Get all scripts from build-files.js file configuration and create new js files in build folder
 *
 * */
gulp.task('scripts:dev', () => es.merge(files.scripts.map(conf => {
        let stream = helpers.src(conf);
        //stream = stream.pipe(annotate());
        return conf.es6 ? helpers.dest(conf, stream.pipe(babel({
            presets: ['es2015'] })).pipe(annotate())) : helpers.dest(conf, stream);

    }))
);

/**
 * @description
 * Task `styles:dev`.
 * Get all styles from build-files.js file configuration and create new css (compile less) files in build folder
 *
 * */
gulp.task('styles:dev', () => es.merge(files.styles.map(conf => {
    let stream = helpers.src(conf);

    if (conf.less) {
        stream = stream
            .pipe(less())
            .pipe(autoprefixer({browsers: ['last 15 versions'], cascade: false}));
    }

    return helpers.dest(conf, stream);
})));


/**
 * @description
 * Task `views:dev`.
 * Get all pug files from src folder compile html, then create templateCache files in build folder
 *
 * */
gulp.task('views:dev',
    () => gulp.src(config.sources.pug, { base: config.paths.src })
        .pipe(pug())
        .pipe(gulp.dest(config.paths.build)));


/**
 * @description
 * Task `index:dev`.
 * Get add js and css files to index.pug and compile to html
 *
 * */
gulp.task('index:dev', () => {
    function extFilter(ext) {
        return name => ext === path.extname(name)
    }

    function listFiles(source) {
        const res = source.map(conf => {
            return conf.files.map(pattern => {
                pattern = pattern.replace(/\.(less)$/, '.css');
                return glob.sync(pattern, {cwd: config.paths.build});
            });
        });

        return _.uniq(_.flattenDeep(res, true));
    }

    const _scripts = listFiles(files.scripts).filter(extFilter('.js'));
    const _styles = listFiles(files.styles).filter(extFilter('.css'));

    return gulp.src(config.sources.index)
        .pipe(pug({
            pretty: true,
            locals: {
                production: false,
                scripts: _scripts,
                styles: _styles
            }
        }))
        .pipe(gulp.dest(config.paths.build));
});

/**
 * @description
 * Task `watch`.
 * Watch all files in src folder (less, js, pug)
 *
 * */
gulp.task('watch', () => {
    gulp.watch(config.sources.index, ['index:dev']);
    gulp.watch(config.sources.pug, ['views:dev']);
    gulp.watch(config.sources.styles, ['styles:dev']);
    gulp.watch(config.sources.scripts, ['scripts:dev']);
});


