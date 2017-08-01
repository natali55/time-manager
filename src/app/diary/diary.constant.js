(function () {
    'use strict';

    angular.module('app.diary')
        .constant('defaultNotes', [
            {
                id: '4',
                title: 'Meeting with Lindsay',
                description: 'We have to meet near the caffe in the city center, We have to meet near the caffe in the city center' +
                'We have to meet near the caffe in the city center, We have to meet near the caffe in the city center' +
                'We have to meet near the caffe in the city center, We have to meet near the caffe in the city center',
                start: new Date('2017, 07, 01'),
                highlightWord: ''
            },
            {
                id: '3',
                title: 'Some',
                description: 'We have to meet near the caffe in the city center ',
                start: new Date('2017, 07, 30'),
                highlightWord: ''
            },
            {
                id: '2',
                title: 'Event 1',
                description: 'We have to meet near the caffe in the city center ',
                start: new Date('2017, 08, 05'),
                highlightWord: 'We'
            }
        ]);
})();

