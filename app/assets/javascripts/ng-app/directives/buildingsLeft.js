(function() {
     function buildingsLeft(ItemData, ImageSharing) {

          return {
              templateUrl: 'buildings_left.html',
              replace: true,
              restrict: 'E',
              scope: {},
              link: function(scope, element, attrs) {

              scope.imagesFacilities = ImageSharing.facilities


              }

            };

      }

      angular
          .module('greenStreet')
          .directive('buildingsLeft', ['ItemData', 'ImageSharing', buildingsLeft]);
  })();
