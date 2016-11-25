(function() {
     function config($stateProvider, $locationProvider, $resourceProvider) {
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

        $resourceProvider.defaults.stripTrailingSlashes = false;
     }

    angular
         .module('greenStreet', ['ui.router', 'templates', 'ngResource'])
         .config(config);
})();
