(function() {
     function dirtyProfile(ItemData, ImageSharing) {

          return {
              templateUrl: 'dirty_profile.html',
              replace: true,
              restrict: 'E',
              scope: {},
              link: function(scope, element, attrs) {

               var dirtyItemsContainer = angular.element('.dirty-items-container');

               dirtyItemsContainer.children().draggable({
                  helper: 'clone',
                  revert: 'invalid',
                  connectToSortable: '.street-profile'
               })

               scope.imagesTransport = ImageSharing.transport;
               scope.imagesFacility = ImageSharing.facility;


               scope.scrollUp = function(){
                  dirtyItemsContainer.scrollTop(dirtyItemsContainer.scrollTop() - 25);
               };

               scope.scrollDown = function(){
                  dirtyItemsContainer.scrollTop(dirtyItemsContainer.scrollTop() + 25);
               };


              }

            };

      }

      angular
          .module('greenStreet')
          .directive('dirtyProfile', ['ItemData', 'ImageSharing', dirtyProfile]);
  })();
