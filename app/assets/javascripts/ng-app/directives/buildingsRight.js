(function() {
     function buildingsRight(ItemData, ImageSharing) {

          return {
              templateUrl: 'buildings_right.html',
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
          .directive('buildingsRight', ['ItemData', 'ImageSharing', buildingsRight]);
  })();
