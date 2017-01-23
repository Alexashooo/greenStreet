(function() {
     function UserSignUpCtrl($scope, UserData, $resource, Auth, $state) {
         this.UserData = UserData;


         var user_credentials = {};

         $scope.regUser = function() {
           user_credentials.email = $scope.email;
           user_credentials.password = $scope.password;
           user_credentials.password_confirmation = $scope.password_confirmation;
           UserData.sendUserDataReg(user_credentials, UserData.configSignInUp);

           $state.go('landing');
         };

         $scope.goBack = function(){
            $state.go('landing');
         };

         $scope.$on('devise:new-registration', function(event, user) {

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
         .controller('UserSignUpCtrl', ['$scope','UserData', '$resource', 'Auth', '$state', UserSignUpCtrl]);
 })();
