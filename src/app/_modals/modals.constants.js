(function () {
    'use strict';

    angular.module('app.modals')
        .constant('defOptions', {
            template: null,
            closeByDocument: false,
            closeByEscape: false,
            showClose: true
        });
}());
