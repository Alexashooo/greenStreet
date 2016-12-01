(function() {
     function LandingCtrl($scope, UserData) {

         $scope.signOut = function() {
           UserData.userSignOut();
           //alert("You just signed out");
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
         .controller('LandingCtrl', ['$scope', 'UserData', LandingCtrl]);
 })();
