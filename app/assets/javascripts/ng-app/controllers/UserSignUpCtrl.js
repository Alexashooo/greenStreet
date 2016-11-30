(function() {
     function UserSignUpCtrl($scope, UserData, $resource, Auth) {
         this.UserData = UserData;

         var user_credentials = {};

         var config = {
             headers: {
                 'X-HTTP-Method-Override': 'POST'
             }
         };

         $scope.regUser = function() {
            user_credentials.email = $scope.email;
            user_credentials.password = $scope.password;
            user_credentials.password_confirmation = $scope.password_confirmation;
            console.log(user_credentials);

            Auth.register(user_credentials, config).then(function(registeredUser) {
                console.log(registeredUser);
            }, function(error) {
                // Registration failed...
            });
         };

         $scope.$on('devise:new-registration', function(event, user) {
             // ...
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
         .controller('UserSignUpCtrl', ['$scope','UserData', '$resource', 'Auth', UserSignUpCtrl]);
 })();
