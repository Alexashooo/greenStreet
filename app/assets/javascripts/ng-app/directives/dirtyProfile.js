(function() {
     function dirtyProfile(ItemData, ImageSharing) {

          return {
              templateUrl: 'dirty_profile.html',
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
          .directive('dirtyProfile', ['ItemData', 'ImageSharing', dirtyProfile]);
  })();
