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
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const server = require( 'gulp-develop-server' );


const files = require('../build-files/index.js');
const helpers = require('../helpers/index.js');
const config = require('../config.js');


/**
 * Production tasks
 * Run `gulp build:production`
 * Create minified js and css files
 *
 * */


gulp.task('scripts:production', () => es.merge(files.scripts.map(conf => {
        let stream = helpers.src(conf).pipe(concat(conf.concat));

        stream = stream.pipe(annotate({ gulpWarnings: false }));

        if (conf.es6) {
            stream = stream.pipe(babel({
                presets: ['es2015'] }));
        }
        stream = stream.pipe(annotate({ gulpWarnings: false }));
        if (conf.min) {
            stream = stream.pipe(uglify({ mangle: true}));
        }

        return helpers.dest(conf, stream);
    }))
);

/** This task build only html files! */
gulp.task('views:production', () => gulp.src(config.sources.pug, { base: config.paths.src })
    .pipe(pug())
    .pipe(gulp.dest(config.paths.build)));

gulp.task('styles:production', () => {
    //const streams = files.styles.map(conf => {
    //    let stream = helpers.src(conf);
    //
    //    if (conf.less) {
    //        stream = stream.pipe(less());
    //    }
    //
    //    return stream;
    //});

const stream1 = helpers.src(files.styles[0]).pipe(uglifycss()).pipe(concat('styles/external.css')).pipe(gulp.dest(config.paths.build));
const stream2 = helpers.src(files.styles[1]).pipe(less()).pipe(uglifycss()).pipe(concat('styles/app.css')).pipe(gulp.dest(config.paths.build));

    //return es.merge(streams).pipe(concat('styles/app.css'))
    //    .pipe(uglifycss())
    //    .pipe(gulp.dest(config.paths.build));
});

gulp.task('index:production', () => {
    function extFilter(ext) {
        return name => ext === path.extname(name);
    }

    function listFiles(source) {
        const res = source.map(conf => glob.sync(conf.concat, {cwd: config.paths.build}));
        return _.uniq(_.flatten(res, true));
    }

    const _views = listFiles(files.views).filter(extFilter('.js'));
    const _scripts = listFiles(files.scripts).filter(extFilter('.js'));
    const _styles = ['styles/external.css', 'styles/app.css'];

    return gulp.src(config.sources.index)
        .pipe(pug({
            pretty: true,
            locals: {
                production: true,
                scripts: _scripts.concat(_views),
                styles: _styles
            }
        }))
        .pipe(gulp.dest(config.paths.build));
});
