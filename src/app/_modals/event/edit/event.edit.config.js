(function () {
    'use strict';

    function eventEditDecorator($delegate, ngDialog, defOptions) {
        $delegate.eventEdit = function (options, event) {
            var config = _.extend({}, defOptions, options, {
                template: 'app/_modals/event/edit/event.edit.template.html',
                controller: 'EventEditController',
                controllerAs: 'eventEditCtr',
                resolve: {
                    EditedEvent: function () {
                        return event;
                    }
                }
            });
            return ngDialog.open(config).closePromise;
        };

        return $delegate;
    }

    angular.module('app.modals')
        .config(function ($provide) {
            $provide.decorator('ModalsService', eventEditDecorator);
        });
}());
