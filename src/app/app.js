(function() {
    'use strict';

    var appDependencies = [
        'ui.router',
        'ngDialog',
        'app.events',
        'app.header',
        'app.footer',
        'app.components',
        'app.time',
        'app.diary',
        'app.shared'
    ];
    angular.module('app', appDependencies);
})();
