(function() {
     function LandingCtrl($scope, UserData, $resource, Auth) {

         $scope.signOut = function() {
           UserData.userSignOut();
         };

         $scope.signInOutRegVisibility = function() {
           if(Auth.isAuthenticated()) {
              return true;
           }
           else {
               return false;
           }
         };





         //this works
         /**
         this.first_street_profile = {};
         this.first_street_profile = UserData.first_streetprofile;
         this.destroy_second_street_profile = UserData.Streetprofiles.destroy({"id": 3});
         */
     }

     angular
         .module('greenStreet')
         .controller('LandingCtrl', ['$scope', 'UserData', '$resource', 'Auth', LandingCtrl]);
 })();
