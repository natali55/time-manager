(function () {
    'use strict';

    angular
        .module('app.diary')
        .config(function ($stateProvider) {
            $stateProvider
                .state('app.diary', {
                    url: "/diary",
                    views: {
                        'content@app': {
                            templateUrl: "app/diary/diary.template.html",
                            controller: "DiaryController",
                            controllerAs: "diary"
                        }
                    }
                });
        });
})();
