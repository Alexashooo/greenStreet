(function() {
     function UserSignInCtrl($scope, UserData, $resource, Auth, $state) {
        this.UserData = UserData;

        var user_credentials = {};

        $scope.signInUser = function() {
          user_credentials.email = $scope.email;
          user_credentials.password = $scope.password;
          UserData.sendUserDataSignIn(user_credentials, UserData.configSignInUp);

          $state.go('landing');
        };

        $scope.goBack = function(){
           $state.go('landing');
        };

        $scope.$on('devise:login', function(event, currentUser) {
          // after a login, a hard refresh, a new tab
        });

        $scope.$on('devise:new-session', function(event, currentUser) {
          // user logged in by Auth.login({...})
        });





         //this works
         /**
         this.first_street_profile = {};
         this.first_street_profile = UserData.first_streetprofile;
         this.destroy_second_street_profile = UserData.Streetprofiles.destroy({"id": 3});
         */
     }

     angular
         .module('greenStreet')
         .controller('UserSignInCtrl', ['$scope', 'UserData', '$resource', 'Auth', '$state', UserSignInCtrl]);

 })();
