(function(){
      function SaveStreetProfileCtrl($scope, UserData, $state){

        $scope.saveProfile = function() {
            UserData.saveStreetProfile();
            alert('The profile is saved');
            $state.go('landing');
        };

        $scope.goBack = function() {
            $state.go('landing');
        }


      }


      angular
          .module('greenStreet')
          .controller('SaveStreetProfileCtrl', ['$scope', 'UserData', '$state',  SaveStreetProfileCtrl]);
})();
