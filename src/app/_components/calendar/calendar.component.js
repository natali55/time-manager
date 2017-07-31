(function () {
    'use strict';

    angular.module('app.components.calendar')
    .component('tmCalendar',
        {
            templateUrl: 'app/_components/calendar/calendar.template.html',
            bindings: {
                eventSources: '=',
                alertOnEventClick: '='
            },
            controller: tmCalendarController
        });
    function tmCalendarController($scope) {
        var vm = this;
        vm.uiConfig = {
            calendar: {
                height: 500,
                editable: true,
                header: {
                    left: 'month basicWeek basicDay agendaWeek agendaDay',
                    center: 'title',
                    right: 'today prev,next'
                },
                eventClick: vm.alertOnEventClick,
                eventDrop: vm.alertOnDrop,
                eventResize: vm.alertOnResize
            }
        };
        //vm.alertOnEventClick = (date) => {
        //    $scope.alertMessage = (date.title + ' was clicked ');
        //};
        //vm.alertOnDrop = () => {
        //    console.log('drop');
        //};
        //vm.alertOnResize = () => {
        //    console.log('resize');
        //};
    }
})();