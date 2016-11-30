(function() {
     function config($stateProvider, $locationProvider, $resourceProvider, AuthProvider) {
         $stateProvider
            .state('landing', {
                url: '/',
                controller: 'LandingCtrl as landing',
                templateUrl: 'landing.html'
            })

            .state('userSignUp', {
                url: '/',
                controller: 'UserSignUpCtrl as userSignUp',
                templateUrl: 'user_signup.html'
            })

            .state('userSignIn', {
                url: '/',
                controller: 'UserSignUpCtrl as userSignIn',
                templateUrl: 'user_signin.html'
            });


         $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });

        $resourceProvider.defaults.stripTrailingSlashes = false;
     }

    angular
         .module('greenStreet', ['ui.router', 'templates', 'ngResource', 'Devise'])
         .config(config);
})();
