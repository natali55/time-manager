(function() {
    'use strict';

    angular.module('app.events')
        .constant('defaultEvents', [
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
        ])
})();

