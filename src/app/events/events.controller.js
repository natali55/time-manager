(function(){
    'use strict';

    angular
        .module('app.events')
        .controller('EventsController',['utilsService','$q', function(utilsService, $q){
            var vm = this;
            function init(){
                vm.events = [
                    {
                        id:'4',
                        name:'Meeting with Lindsay',
                        description:'We have to meet near the caffe in the city center, We have to meet near the caffe in the city center' +
                        'We have to meet near the caffe in the city center, We have to meet near the caffe in the city center' +
                        'We have to meet near the caffe in the city center, We have to meet near the caffe in the city center',
                        isCompleted:true,
                        date:new Date('11/11/2016')
                    },
                    {
                        id:'3',
                        name:'Some',
                        description:'We have to meet near the caffe in the city center ',
                        isCompleted:false,
                        date:new Date('11/11/2016')
                    },
                    {
                        id:'2',
                        name:'Event 1',
                        description:'We have to meet near the caffe in the city center ',
                        isCompleted:false,
                        date:new Date('11/11/2016')
                    },
                    {
                        id:'1',
                        name:'Mother',
                        description:'We have to meet near the caffe in the city center ',
                        isCompleted:false,
                        date:new Date('11/11/2016')
                    }
                ];
                vm.eventFormOpened = false;
                vm.newEvent = '';
            }
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
