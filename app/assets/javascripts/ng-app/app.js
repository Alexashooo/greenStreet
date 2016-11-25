(function() {
     function config($stateProvider, $locationProvider) {
         $stateProvider
            .state('landing', {
                url: '/',
                controller: 'LandingCtrl as landing',
                templateUrl: 'landing.html'
            });

         $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
     }

    angular
         .module('greenStreet', ['ui.router', 'templates', 'ngResource'])
         .config(config);
})();
