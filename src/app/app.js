(function() {
    'use strict';

    var appDependencies = [
        'ui.router',
        'ngStorage',
        'ui.calendar',
        'app.modals',
        'app.events',
        'app.header',
        'app.footer',
        'app.components',
        'app.time',
        'app.diary',
        'app.shared',
        'app.calendar'
    ];
    angular.module('app', appDependencies);
})();
