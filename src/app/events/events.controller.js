(function(){
    'use strict';

    angular
        .module('app.events')
        .controller('EventsController',['$localStorage', 'utilsService', 'defaultEvents', function($localStorage, utilsService, defaultEvents){
            var vm = this;
            var init = function () {
                vm.events = $localStorage.events || defaultEvents;
                $localStorage.events = vm.events;
                vm.eventFormOpened = false;
                vm.newEvent = '';
            };
            vm.deleteEvent = function($index) {
                vm.events.splice($index,1);
            };
            vm.addNewEvent = function() {
                var newId, newEventCopy;
                if (!utilsService.validateForm(vm.EventsForm) || !vm.newEvent.date) {
                    return;
                }
                newId = utilsService.generateId(vm.events);
                newEventCopy = angular.copy(vm.newEvent);
                vm.events.unshift({
                    id:newId,
                    name:newEventCopy.name,
                    description:newEventCopy.description,
                    isCompleted:false,
                    date:newEventCopy.date
                });
                vm.newEvent = '';
                vm.eventFormOpened = false;
                utilsService.setUntouched(vm.EventsForm);

            };
            init();

        }]);
})();