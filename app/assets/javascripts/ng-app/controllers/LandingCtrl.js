(function() {
     function LandingCtrl($scope, UserData, $resource, Auth, $rootScope) {

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

         $rootScope.$watch(function(){
              console.log("Angular started to digest the code");
         });

     }

     angular
         .module('greenStreet')
         .controller('LandingCtrl', ['$scope', 'UserData', '$resource', 'Auth', '$rootScope', LandingCtrl]);
 })();
