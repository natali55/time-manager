(function(){
    'use strict';

    angular
        .module('app.calendar')
        .controller('CalendarController', ['$localStorage', 'utilsService', 'defaultEvents', function ($localStorage, utilsService, defaultEvents) {
            var vm = this;
            var init = function () {
                vm.events = $localStorage.events || defaultEvents;
                $localStorage.events = vm.events;
                vm.newEvent = '';
            };
            vm.alertOnEventClick = (date) => {
                alert(date.title + ' was clicked ');
            };
            vm.deleteEvent = function($index) {
                vm.events.splice($index,1);
            };
            vm.addNewEvent = function() {
                var newId, newEventCopy;
                if (!utilsService.validateForm(vm.EventsForm) || !vm.newEvent.start) {
                    return;
                }
                newId = utilsService.generateId(vm.events);
                newEventCopy = angular.copy(vm.newEvent);
                vm.events.unshift({
                    id: newId,
                    title: newEventCopy.name,
                    description: newEventCopy.description,
                    isCompleted: false,
                    start: newEventCopy.start
                });
                vm.newEvent = '';
                utilsService.setUntouched(vm.EventsForm);
            };
            init();
        }]);
})();