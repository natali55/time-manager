(function () {

    angular
        .module('app.modals')
        .controller('EventAddController', ['$localStorage', 'utilsService', 'defaultEvents',
            function ($localStorage, utilsService, defaultEvents, ModalsService) {
                var vm = this;

                vm.add = function () {
                };
            }]);
}());
