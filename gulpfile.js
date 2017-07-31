'use strict';

const gulp = require('gulp');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const pug = require('gulp-pug');
const plumber = require('gulp-plumber');
const del = require('del');
const run = require('run-sequence');
const path = require('path');
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

const config = require('./modules/gulp/config.js');
const devTasks = require('./modules/gulp/index.js');
const helpers = require('./modules/gulp/helpers/index.js');
const files = require('./modules/gulp/build-files/index.js');

/**
 * @description
 * Task `assets`.
 * Get all files from assets folder and move to build folder
 *
 * */

gulp.task('assets', () => gulp.src(config.sources.assets, { base: config.paths.src })
	.pipe(gulp.dest(config.paths.build)));

/**
 * @description
 * Task `fonts`.
 * Get all font files from fonts folder and move to build folder
 *
 * */
gulp.task('fonts', () => es.merge(files.fonts.map(conf => helpers.dest(conf, helpers.src(conf)))));

/**
 * @description
 * Task `clean`. For remove build folder
 *
 * */
gulp.task('clean', () => del(config.paths.build));

gulp.task('server:start', () => server.listen({ path: './server.js' }));

/**
 * @description
 * Task `build:dev`.
 * Build project (js, css, assets, fonts, html)
 *
 *
 * */
gulp.task('build:dev',
	next => run('clean', ['styles:dev', 'scripts:dev', 'views:dev', 'assets', 'fonts'],
	'index:dev', next));

/**
 * @description
 * Task `build:dev`.
 * By default run `build:dev` task
 *
 * */
gulp.task('default', next => run('build:dev', next));

/**
 * @description
 * Task `live`.
 * Run `build:dev` task and run `watch` task
 *
 * */
gulp.task('live', next => run('build:dev', 'watch', 'server:start', next));

gulp.task('build:production',
	next => run('clean', ['styles:production', 'scripts:production', 'views:production', 'assets', 'fonts'],
	'index:production', next));
