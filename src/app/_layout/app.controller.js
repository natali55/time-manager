(function(){
    'use strict';

    angular
        .module('app')
        .controller('AppController', ['$rootScope', '$localStorage', function ($rootScope, $localStorage) {
            let init = function() {
                $rootScope.events = $localStorage.events || [];
            };
            init();
        }]);
})();
