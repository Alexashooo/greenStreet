(function() {
     function streetProfile() {

          return {
              templateUrl: 'street_profile.html',
              replace: true,
              restrict: 'E',
              scope: {},
              link: function(scope, element, attrs) {

                    //defined values before resizing starts and they get new values from selected element
                    var itemStartWidth = 0;
                    var profileStartLeft = 0;

                    var extraSpaceWhileSorting = 40;

                    //item default height and Width applied on dropped element
                    var itemDefaultWidth = 148;
                    var itemDafaultHeight = 693;

                    //item (sortable element) start width and start "left" position of its parent (street profile)
                    //while risizing
                    var startValuesWhileResizing = function(element, child){
                          itemStartWidth = parseInt(child.css('width'));
                          profileStartLeft = parseInt(element.css('left'));
                          containerStartLeft = parseInt(element.parent().css('left'));
                    }
                    //usefull while resizing elements and ajusting parent (street-profile) left property
                    //in order to get "illusion" of resizing left end right from senter of the element
                    var referenceForResizing = function(element, child){
                      child.css('left', 0);
                      element.css('left', profileStartLeft - (parseInt(child.css('width')) - itemStartWidth)/2);
                    }
                   element.children().resizable({
                     start: function(event, ui){
                           startValuesWhileResizing(element, ui.element);
                     },
                     handles: 'e, w',
                     resize: function(event, ui){
                       referenceForResizing(element, ui.element);
                     }
                   });

                   element.disableSelection().sortable({
                     placeholder: 'placeholder',
                     // custom handle
                     handle: '.myHandle',
                     sort: function(event, ui){
                         ui.placeholder.css('width', parseInt(ui.item.css('width'))+extraSpaceWhileSorting);

                     },
                     stop: function(event, ui){

                         console.log(ui.item.css('margin-left'), ui.item.css('margin-right'));
                     }
                     }).droppable({
                      drop: function(event, ui) {
                        //prevent profile items to change while drag/drop
                        if($(ui.draggable).hasClass('dirty-item') || $(ui.draggable).hasClass('green-item')){
                          //remove class if draggable is dropped
                           $(ui.draggable).removeClass();
                           //add class if draggabdirtyitemle is dropped
                           $(ui.draggable).addClass('item');
                            //adjusting height and width
                           $(ui.draggable).height(itemDafaultHeight);
                           $(ui.draggable).width(itemDefaultWidth);

                           //move the list(streetProfile) to left while adding items
                           element.css('left', parseInt(element.css('left'))- parseInt($(ui.draggable).css('width'))/2);
                           $(ui.draggable).resizable({
                             start: function(event, ui){
                                 startValuesWhileResizing(element, ui.element);
                             },
                             handles: 'e, w',
                             // custom handle
                             //handle: '.myHandle',
                             resize: function(event, ui){
                                referenceForResizing(element, ui.element);
                             }
                           });

                           //Adding HTML for arrows
                          $(ui.draggable).append(
                               "<div class='resize-arrow-left'></div>",
                               "<div class='resize-arrow-right'></div>"
                          );

                        }
                      }
                    });
              }
            };
      }

      angular
          .module('greenStreet')
          .directive('streetProfile', streetProfile);
  })();
