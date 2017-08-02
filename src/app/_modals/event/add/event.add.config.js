(function () {
    'use strict';

    function eventAddDecorator($delegate, ngDialog, defOptions) {
        $delegate.eventAdd = function (options) {
            var config = _.extend({}, defOptions, options, {
                template: 'app/_modals/event/add/event.add.template.html',
                controller: 'EventAddController',
                controllerAs: 'eventAddCtr'
            });
            return ngDialog.open(config).closePromise;
        };

        return $delegate;
    }

    angular.module('app.modals')
        .config(function ($provide) {
            $provide.decorator('ModalsService', eventAddDecorator);
        });
}());
