(function () {
    'use strict';

    angular
        .module('app.time')
        .config(function ($stateProvider) {
            $stateProvider
                .state('app.time', {
                    url: "/",
                    views: {
                        'content@app': {
                            templateUrl: "app/time/time.template.html",
                            controller: "TimeController",
                            controllerAs: "time"
                        }
                    }
                });
        });
})();
