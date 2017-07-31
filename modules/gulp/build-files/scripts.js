'use strict';

module.exports = [
    {
        files: [
            'components/lodash/lodash.js',
            'components/jquery/dist/jquery.js',
            'components/moment/min/moment.min.js'
        ],
        min: true,
        concat: 'scripts/libs.js'
    },
    {
        files: [
            'components/angular/angular.js',
            'components/angular-ui-router/release/angular-ui-router.js',
            'components/angular-sanitize/angular-sanitize.js',
        ],
        min: true,
        concat: 'scripts/ng-core.js',
    },
    {
        files: [
            'components/angular-bootstrap/ui-bootstrap.min.js',
            'components/angular-bootstrap/ui-bootstrap-tpls.min.js',
            'components/ng-dialog/js/ngDialog.min.js',
            'components/ngstorage/ngStorage.min.js',
            'components/angular-ui-calendar/src/calendar.js',
            'components/fullcalendar/dist/fullcalendar.min.js',
            'components/fullcalendar/dist/gcal.js'
        ],
        min: true,
        concat: 'scripts/ng-vendor.js'
    },
    {
        files: [
            'app/app.js',
            'app/app.config.js',
            'app/**/*.module.js',
            'app/**/*.config.js',
            'app/**/*.constant.js',
            'app/**/*.service.js',
            'app/**/*.filter.js',
            'app/**/*.directive.js',
            'app/**/*.controller.js',
            'app/**/*.template.js',
            'app/**/*.js'
        ],
        es6: true,
        min: true,
        concat: 'scripts/app.js'
    }
];
