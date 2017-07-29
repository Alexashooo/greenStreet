(function() {
     function config($stateProvider, $locationProvider, $resourceProvider, AuthProvider, $urlRouterProvider) {
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
                controller: 'UserSignInCtrl as userSignIn',
                templateUrl: 'user_signin.html'
            })

            .state('UsersStreetProfiles', {
                url:'/',
                controller: 'UsersStreetProfilesCtrl as usersStreetProfiles',
                templateUrl: 'users_street_profiles.html'
            })

           .state('landing.saveStreetProfile', {
                url:'/save_profile',
                templateUrl: 'save_profile.html',
                controller: 'SaveStreetProfileCtrl as saveStreetProfile'
            })

            .state('landing.enterStreetProfileData', {
                url:'/save_form',
                templateUrl: 'save_profile_form.html',
                controller: 'EnterStreetProfileDataCtrl as enterStreetProfileData'
            });

         $urlRouterProvider.otherwise('/');

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
