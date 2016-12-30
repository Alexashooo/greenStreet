(function() {
     function streetProfile() {

          return {
              templateUrl: 'street_profile.html',
              replace: true,
              restrict: 'E',
              scope: {},
              link: function(scope, element, attrs) {
                   element.disableSelection().sortable({
                     scroll: true,
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
                           $(ui.draggable).width($('.item').css('width'));


                           //Adding HTML for arrows
                          $(ui.draggable).append("<div class='resize-arrow-left'></div>");
                          $(ui.draggable).append("<div class='resize-arrow-right'></div>");

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
