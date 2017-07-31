(function () {
    'use strict';

    angular
        .module('app.calendar')
        .config(function ($stateProvider) {
            $stateProvider
                .state('app.calendar', {
                    url: '/calendar',
                    views: {
                        'content@app': {
                            templateUrl: 'app/calendar/calendar.template.html',
                            controller: 'CalendarController',
                            controllerAs: 'calendarCtr'
                        }
                    }
                });
        });
})();
