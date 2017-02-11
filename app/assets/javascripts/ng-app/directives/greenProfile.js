(function() {
     function greenProfile(ItemData, ImageSharing) {

          return {
              templateUrl: 'green_profile.html',
              replace: true,
              restrict: 'E',
              scope: {},
              link: function(scope, element, attrs) {

               var greenItemsContainer = angular.element('.green-items-container');

                greenItemsContainer.children().draggable({
                    helper: 'clone',
                    revert: 'invalid',
                    connectToSortable: '.street-profile'
                })

                scope.imagesTransport = ImageSharing.transport;
                scope.imagesFacility = ImageSharing.facility;

                scope.scrollUp = function(){
                   greenItemsContainer.scrollTop(greenItemsContainer.scrollTop() - 25);
                };

                scope.scrollDown = function(){
                   greenItemsContainer.scrollTop(greenItemsContainer.scrollTop() + 25);
                };
              }

            };
      }

      angular
          .module('greenStreet')
          .directive('greenProfile', ['ItemData', 'ImageSharing', greenProfile]);
  })();
