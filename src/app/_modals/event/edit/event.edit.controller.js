(function () {

    angular
        .module('app.modals')
        .controller('EventEditController', ['EditedEvent',
            function (EditedEvent) {
                let vm = this;
                let init = function() {
                    vm.event = angular.copy(EditedEvent) || {};
                    vm.event.start = new Date(vm.event.start);
                };
                init();
            }]);
}());
