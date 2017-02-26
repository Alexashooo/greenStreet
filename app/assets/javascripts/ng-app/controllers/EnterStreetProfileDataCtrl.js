(function(){
      function EnterStreetProfileDataCtrl($scope, UserData, $state){

        $scope.goBack = function() {
            $state.go('landing.saveStreetProfile');
        };


      }


      angular
          .module('greenStreet')
          .controller('EnterStreetProfileDataCtrl', ['$scope', 'UserData', '$state', EnterStreetProfileDataCtrl]);
})();
