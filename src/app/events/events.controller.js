(function(){
    'use strict';

    angular
        .module('app.events')
        .controller('EventsController', ['$localStorage', 'utilsService', 'defaultEvents', 'ModalsService', function ($localStorage, utilsService, defaultEvents, ModalsService) {
            let vm = this;
            let dialog;
            let init = () => {
                vm.events = $localStorage.events || defaultEvents;
                $localStorage.events = vm.events;
                vm.eventFormOpened = false;
                vm.newEvent = '';
            };
            vm.deleteEvent = ($index) => {
                if (dialog) {
                    return;
                }
                dialog = ModalsService.confirm({
                    text: 'Are you sure you want to delete this event?',
                    buttons: ['yes', 'no']
                });
                dialog.closePromise.then(function (close) {
                    dialog = false;
                    if (close.value === 'yes') {
                        vm.events.splice($index, 1);
                    }
                });
            };
            vm.onDoneEvent = (event) => {
                if (!utilsService.checkIfPastDate(event.start)) {
                    //alert('Opps, this event is future event and can\'t be completed yet');
                    event.isCompleted = false;
                    return;
                }
                if (dialog) {
                    return;
                }
                dialog = ModalsService.confirm({
                    text: 'Are you sure you want to make this event completed? You won\'t be able to change it back',
                    buttons: ['yes', 'no']
                });
                dialog.closePromise.then(function (close) {
                    dialog = false;
                    if (close.value !== 'yes') {
                        event.isCompleted = false;
                    }
                });
            };
            vm.addNewEvent = () => {
                let newId;
                let newEventCopy;
                if (!utilsService.validateForm(vm.EventsForm) || !vm.newEvent.start) {
                    return;
                }
                newId = utilsService.generateId(vm.events);
                newEventCopy = angular.copy(vm.newEvent);
                vm.events.unshift({
                    id: newId,
                    title: newEventCopy.title,
                    description: newEventCopy.description,
                    isCompleted: false,
                    start: newEventCopy.start
                });
                vm.newEvent = '';
                vm.eventFormOpened = false;
                utilsService.setUntouched(vm.EventsForm);
            };
            init();

        }]);
})();