(function(){
    'use strict';

    angular
        .module('app.time')
        .controller('TimeController', function(){
            let vm = this;
            vm.date = new Date();
        });
})();
