(function() {
     function streetProfile() {

          return {
              templateUrl: 'street_profile.html',
              replace: true,
              restrict: 'E',
              scope: {},
              link: function(scope, element, attrs) {

                   //write  custom resizible() function
                  // use alsoResize to resize other elements
                  //maxHeight: 80 can be one solution to limit vertical resizing to 0
                  //maxWidth: ? can be one solution to limit horizontal resizing
                  //minWidth
                   element.children().resizable({
                     handles: 'e, w',
                     resize: function(event, ui){
                         ui.element.css(ui.originalPosition);
                     }
                   });

                   element.disableSelection().sortable({
                     tolerance: 'pointer',
                     scroll: true,
                     placeholder: 'placeholder',
                     containment: 'parent',
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
                             handles: 'e, w',
                             resize: function(event, ui){
                                 ui.element.css(ui.originalPosition);
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
