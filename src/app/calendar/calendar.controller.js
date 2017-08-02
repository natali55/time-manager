(function(){
    'use strict';

    angular
        .module('app.calendar')
        .controller('CalendarController', ['$localStorage', 'utilsService', 'defaultEvents',
            'ModalsService',
            function ($localStorage, utilsService, defaultEvents, ModalsService) {
                var vm = this;
                var dialog;
                var init = function () {
                    vm.events = $localStorage.events || defaultEvents;
                    $localStorage.events = vm.events;
                    vm.newEvent = '';
                };
                vm.alertOnEventClick = (date) => {
                    if (dialog) {
                        return;
                    }
                    dialog = ModalsService.eventEdit({}, date);
                    dialog.then(function () {
                        dialog = false;
                    });
                };
                vm.alertOnDrop = (event, delta) => {
                    let droppedEventIndex;
                    droppedEventIndex = vm.events.findIndex(function (value) {
                        if (value.id === this.id) {
                            return true;
                        }
                    }, event);
                    vm.events[droppedEventIndex].start = new Date(event.start);
                };
                init();
            }]);
})();