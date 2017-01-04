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
                    var currentMousePos = 0;
                    var mouseXDirection = "";

                    //determine mouse direction, "left" or "right"
                    var mouseDirection = function(event){
                      if (event.pageX < currentMousePos) {
                        mouseXDirection = "left"

                      } else if (event.pageX > currentMousePos) {
                        mouseXDirection = "right"
                      };
                      currentMousePos = event.pageX;
                      return mouseXDirection;
                    };



                   element.children().resizable({
                     start: function(event, ui){
                           itemStartWidth = parseInt(ui.element.css('width'));
                           profileStartLeft = parseInt(element.css('left'));
                     },
                     handles: 'e, w',
                     resize: function(event, ui){
                       var whichHandle = ui.element.data('ui-resizable').axis;

                       if(whichHandle === "w"){
                            if(mouseDirection(event)==="left"){
                              ui.element.css('left', 0);
                              element.css('left', profileStartLeft - Math.abs(parseInt(ui.element.css('width')) - itemStartWidth)/2);
                            } else if(mouseDirection(event)==="right"){
                              ui.element.css('left', 0);
                              element.css('left', profileStartLeft - Math.abs(parseInt(ui.element.css('width')) - itemStartWidth)/2);
                            }
                       } else if(whichHandle === "e"){
                            if(mouseDirection(event)==="right"){
                              ui.element.css('left', 0);
                              element.css('left', profileStartLeft - Math.abs(parseInt(ui.element.css('width')) - itemStartWidth)/2);
                            } else if(mouseDirection(event)==="left"){
                              ui.element.css('left', 0);
                              element.css('left', profileStartLeft - Math.abs(parseInt(ui.element.css('width')) - itemStartWidth)/2);
                            }
                       };

                        console.log(profileStartLeft, element.css('left'), mouseDirection(event));
                     }
                   });

                   element.disableSelection().sortable({
                     tolerance: 'pointer',
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
                             handles: 'e, w',
                             resize: function(event, ui){

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
