(function() {
      function profileItem(ItemData, $document, ImageSharing){

          return {
              templateUrl: 'profile_item.html',
              replace: true,
              restrict: 'E',
              link: function(scope, element, attrs){

               //confirming manual input fron input box
               var manualInput = false;


                $(document).keypress(function(e) {
                    if(e.which == 13 && !manualInput) {
                      manualInput = true;
                    }
                });


                scope.currentElement = {
                   parentWidth: element.parent().width()
                };


                //apply manual width with enter
                scope.applyNewWidth = function(){
                  element.parent().css('width', scope.currentElement.parentWidth);
                  return true;
                };


                //following change of the element width while resize
                scope.updateWidth = function(){
                    return element.parent().width();
                };


                //applyng new value on element 'width' when manual input
                scope.$watch('updateWidth()', function(oldValue, newValue){
                  if(newValue && !manualInput){
                      scope.currentElement.parentWidth = newValue;
                  } else if(manualInput){
                     manualInput = false;
                  }

                });


               scope.removeItem = function(){
                  element.parent().empty().remove();
                  console.log(scope);
               };

                scope.imageUrl = ItemData.bigImage;
                scope.imageID = ItemData.newImageID;
                scope.imageScale = ItemData.imageFactor;

                scope.setImageHeight = function(){
                   return ItemData.referenceScale * scope.imageScale;
                };


                // appying/showing chosen extra option(direction, mix traffic...) in transport-mode pavement
                scope.applyExtraOption = function(extraOptionElement){
                    var imageSource = extraOptionElement.firstChild.getAttribute('ng-src');
                    element.children()[3].getElementsByTagName('img')[0].setAttribute('src', imageSource);
                };

              }
          };

      }

      angular
          .module('greenStreet')
          .directive('profileItem', ['ItemData', '$document', 'ImageSharing', profileItem]);
})();
