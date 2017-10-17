(function() {
      function profileItem(ItemData, $document, ModalService){

          return {
              templateUrl: 'profile_item.html',
              replace: true,
              restrict: 'E',
              scope:{
              },
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
               };

                scope.imageUrl = ItemData.bigImage;
                scope.imageID = ItemData.newImageID;
                scope.imageScale = ItemData.imageFactor;

                scope.setImageHeight = function(){
                   return ItemData.referenceScale * scope.imageScale;
                };

                //showing modal with item extra options
                scope.showItemExtraOptions = function(){
                  ModalService.showModal({
                    templateUrl: "item_extra_options.html",
                    controller: function(){

                    }
                  }).then(function(modal) {
                    modal.element.modal();
                    modal.close.then(function(result) {

                    });
                  });
                };


              }
          };

      }

      angular
          .module('greenStreet')
          .directive('profileItem', ['ItemData', '$document', 'ModalService', profileItem]);
})();
