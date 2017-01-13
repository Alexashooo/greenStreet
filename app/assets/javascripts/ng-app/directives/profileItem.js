(function() {
      function profileItem(){
          return {
              templateUrl: 'profile_item.html',
              replace: true,
              restrict: 'E',
              scope: {},
              link: function(scope, element, attrs){

              }
          };

      }

      angular
          .module('greenStreet')
          .directive('profileItem', profileItem);
})();
