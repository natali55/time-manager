'use strict';
/**
 * @module helpers
 * Gulp help functions module
 *
 * */

const gulp = require('gulp');
const run = require('run-sequence');
const plumber = require('gulp-plumber');
const path = require('path');
const config = require('../config.js');
const _ = require('lodash');

exports.src = conf => {
    const _files = conf.files.map(f => path.join(config.paths.src, f));
    return gulp.src(_files, {base: config.paths.src}).pipe(plumber());
};

exports.dest = (conf, stream) => stream.pipe(gulp.dest(path.join(config.paths.build, conf.out || '')));

exports.getModuleName = file => {
    let pathParts;
    let index;
    let moduleName;

    pathParts = file.path.split('/');
    index = _.findLastIndex(pathParts, item => item === 'app');
    moduleName = _.join(_.slice(pathParts, index, pathParts.length - 1), '.');

    return moduleName.replace(/_[a-z]/g, match => match.replace('_', ''));
};
