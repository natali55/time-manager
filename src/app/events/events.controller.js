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
                if (dialog) {
                    return;
                }
                if (!utilsService.checkIfPastDate(event.start)) {
                    dialog = ModalsService.confirm({
                        text: 'Sorry, this event is future event. You can make done only past events!',
                        buttons: ['ok']
                    });
                    dialog.closePromise.then(function () {
                        dialog = false;
                        event.isCompleted = false;
                    });
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