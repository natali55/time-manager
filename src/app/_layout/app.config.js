(function () {
    'use strict';

    angular
        .module('app')
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');

            $stateProvider.state('app', {
                abstract: true,
                views: {
                    "":{
                        templateUrl: 'app/_layout/app.template.html',
                        controller: 'AppController',
                        controllerAs: 'app'
                    },
                    "header@app": {
                        templateUrl: 'app/_layout/_header/header.template.html',
                        controller: 'HeaderController',
                        controllerAs: 'header'
                    },
                    "footer@app": {
                        templateUrl: 'app/_layout/_footer/footer.template.html',
                        controller: 'FooterController',
                        controllerAs: 'footer'
                    }
                }
            });
        });
})();
