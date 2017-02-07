(function() {
     function greenProfile(ItemData, ImageSharing) {

          return {
              templateUrl: 'green_profile.html',
              replace: true,
              restrict: 'E',
              scope: {},
              link: function(scope, element, attrs) {
                for(var i =0; i < element[0].children.length; i++) {
                    angular.element(element[0].children[i]).draggable({
                        helper: 'clone',
                        revert: 'invalid',
                        connectToSortable: '.street-profile'
                    })

                };
                scope.imagesTransport = ImageSharing.transport;
                scope.imagesFacility = ImageSharing.facility;
              }

            };
      }

      angular
          .module('greenStreet')
          .directive('greenProfile', ['ItemData', 'ImageSharing', greenProfile]);
  })();
