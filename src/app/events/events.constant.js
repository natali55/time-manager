(function () {
    'use strict';

    angular.module('app.events')
        .constant('defaultEvents', [
            {
                id: '4',
                title: 'Meeting with Lindsay',
                description: 'We have to meet near the caffe in the city center, We have to meet near the caffe in the city center' +
                'We have to meet near the caffe in the city center, We have to meet near the caffe in the city center' +
                'We have to meet near the caffe in the city center, We have to meet near the caffe in the city center',
                isCompleted: true,
                start: new Date('2017, 07, 01')
            },
            {
                id: '3',
                title: 'Some',
                description: 'We have to meet near the caffe in the city center ',
                isCompleted: false,
                start: new Date('2017, 07, 30')
            },
            {
                id: '2',
                title: 'Event 1',
                description: 'We have to meet near the caffe in the city center ',
                isCompleted: false,
                start: new Date('2017, 08, 05')
            }
        ])
        .constant('eventsFilter', {
            ALL: 1,
            FUTURE: 2,
            PAST: 3,
            COMPLETED: 4
        });
})();

