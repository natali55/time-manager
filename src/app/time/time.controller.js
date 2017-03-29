(function(){
    'use strict';

    angular
        .module('app.time')
        .controller('TimeController', function(){
            var vm = this;
            vm.date = new Date();
        });
})();
