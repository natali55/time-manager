(function(){
    'use strict';

    angular
        .module('app.components.tickingTime')
        .component('tickingTimeComponent',
            {
                templateUrl: 'app/_components/ticking-time/ticking-time.template.html',
                controller: function ($interval, $element){
                    var vm = this;
                    var init = function() {
                        var stopTime;
                        vm.date = new Date();
                        stopTime = $interval(updateTime, 1000);

                        function updateTime() {
                            vm.date = new Date();
                        }
                        $element.on('$destroy', function() {
                            $interval.cancel(stopTime);
                        });
                    };
                    init();

                }
            }
        );
})();
