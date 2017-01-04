(function() {
     function streetProfile() {

          return {
              templateUrl: 'street_profile.html',
              replace: true,
              restrict: 'E',
              scope: {},
              link: function(scope, element, attrs) {

                    var itemStartWidth = 0;
                    var profileStartLeft = 0;

                    //item (sortable element) start width and start "left" position of its parent (street profile)
                    //while risizing
                    var startValuesWhileResizing = function(element, child){
                          itemStartWidth = parseInt(child.css('width'));
                          profileStartLeft = parseInt(element.css('left'));
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
                       //console.log(profileStartLeft, element.css('left'), itemStartWidth);
                     }

                   });

                   element.disableSelection().sortable({
                     //tolerance: 'pointer',
                     placeholder: 'placeholder',
                     axis: 'x'
                     }).droppable({
                      drop: function(event, ui) {
                        //prevent profile items to change while drag/drop
                        if($(ui.draggable).hasClass('dirtyitem')){
                          //remove class if draggable is dropped
                           $(ui.draggable).removeClass();
                           //add class if draggable is dropped
                           $(ui.draggable).addClass('item ui-sortable-handle');
                            //adjusting height and width
                           $(ui.draggable).height($('.item').css('height'));
                           $(ui.draggable).width(100);
                           $(ui.draggable).resizable({
                             start: function(event, ui){
                                 startValuesWhileResizing(element, ui.element);
                             },
                             handles: 'e, w',
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
