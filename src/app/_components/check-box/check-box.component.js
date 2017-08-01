(function () {
    'use strict';

    angular.module('app.components.checkBox')
    .component('checkBox',
        {
            templateUrl: 'app/_components/check-box/check-box.template.html',
            bindings: {
                checkBoxId: '@',
                checkBoxModel: '=',
                checkBoxDisabled: '=',
                checkBoxChange: '=',
                elementToChange: '='
            }
        });
})();
