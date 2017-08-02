(function () {
    'use strict';

    angular.module('app.components.radio')
    .component('radioBtn',
        {
            templateUrl: 'app/_components/radio/radio.template.html',
            bindings: {
                radioId: '@',
                radioModel: '=',
                radioValue: '=',
                radioText: '@'
            }
        });
})();
