(function () {
    'use strict';

    function confirmDecorator($delegate, ngDialog) {
        $delegate.confirm = function (config) {
            let cfg = config || {};
            if (!cfg.buttons || cfg.buttons.lenght === 0) {
                cfg.buttons = ['ok'];
            }
            return ngDialog.open({
                template: 'app/_modals/confirm/confirm.template.html',
                className: 'ngdialog-theme-default',
                controller: ['$scope', function ($scope) {
                    $scope.text = cfg.text;
                    $scope.buttons = cfg.buttons;
                    $scope.close = function (value) {
                        return $scope.closeThisDialog(value);
                    };
                    $scope.hasBtn = function (btn) {
                        return $scope.buttons && $scope.buttons.indexOf(btn) !== -1;
                    };
                }]
            });
        };

        return $delegate;
    }

    angular.module('app.modals')
        .config(function ($provide) {
            $provide.decorator('ModalsService', confirmDecorator);
        });
}());
