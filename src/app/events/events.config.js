(function () {
    'use strict';

    angular
        .module('app.events')
        .config(function ($stateProvider) {
            $stateProvider
                .state('app.events', {
                    url: "/events",
                    views: {
                        'content@app': {
                            templateUrl: "app/events/events.template.html",
                            controller: "EventsController",
                            controllerAs: "events"
                        }
                    }
                });
        });
})();
