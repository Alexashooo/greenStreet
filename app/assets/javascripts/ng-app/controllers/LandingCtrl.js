(function() {
     function LandingCtrl($scope, UserData, $resource, Auth, $rootScope, $state) {


         $scope.signOut = function() {
           UserData.userSignOut();
         };

         //controlles "show" and "hide" for signIn/Out and save
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
         .controller('LandingCtrl', ['$scope', 'UserData', '$resource', 'Auth', '$rootScope', '$state', LandingCtrl]);
 })();
