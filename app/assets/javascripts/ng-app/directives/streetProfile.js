(function() {
     function streetProfile($compile, $templateCache, ItemData, ImageSharing) {

          return {
              templateUrl: 'street_profile.html',
              replace: true,
              restrict: 'E',
              scope: {
              },
              link: function(scope, element, attrs) {

                    var onloadItems = $templateCache.get('onload_items.html');

                    var deafultElementsOnStart = function(onloadItems){
                        element.append($compile(onloadItems)(scope));
                    };

                    deafultElementsOnStart(onloadItems);

                    //defined values before resizing starts and they get new values from selected element
                    var itemStartWidth = 0;
                    var profileStartLeft = 0;

                    var extraSpaceWhileSorting = 40;

                    //item default Width applied on dropped element
                    var itemDefaultWidth = 148;

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

                    //makes items in streetProfile resizible
                   element.children().resizable({
                     start: function(event, ui){
                           startValuesWhileResizing(element, ui.element);
                     },
                     handles: 'e,w',
                     resize: function(event, ui){
                       referenceForResizing(element, ui.element);
                       scope.$apply();
                     }
                   });

                   element.disableSelection().sortable({
                     placeholder: 'placeholder',
                     // custom handle
                     handle: '.item-transportmode-pavement, .item-transportmode-picture',
                     sort: function(event, ui){
                         ui.placeholder.css('width', parseInt(ui.item.css('width'))+extraSpaceWhileSorting);

                     },
                     stop: function(event, ui){
                         //console.log(ui.item.css('margin-left'), ui.item.css('margin-right'));
                     }
                     }).droppable({
                      drop: function(event, ui) {
                        //prevent street profile items to change while sorting
                        if($(ui.draggable).hasClass('dirty-item') || $(ui.draggable).hasClass('green-item')){

                           console.log($(ui.draggable).attr('id'));

                          //remove classes  and HTML if draggable is dropped
                           $(ui.draggable).removeClass().empty().addClass('item-container');

                            //adjusting height and width
                           $(ui.draggable).height(parseInt($('.street-profile').css('height'))-4);
                           $(ui.draggable).width(itemDefaultWidth);

                           //move the list(streetProfile) to left while adding items
                           element.css('left', parseInt(element.css('left'))- parseInt($(ui.draggable).css('width'))/2);

                           $(ui.draggable).resizable({
                             start: function(event, ui){
                                 startValuesWhileResizing(element, ui.element);
                             },

                             handles: 'e, w',
                             resize: function(event, ui){
                                referenceForResizing(element, ui.element);
                                scope.$apply();
                             }
                           });

                           //Adding HTML for new items dropped in streetProfile
                           $(ui.draggable).append($compile('<profile-item></profile-item>')(scope));


                        }
                      }
                    });
              }
            };
      }

      angular
          .module('greenStreet')
          .directive('streetProfile', ['$compile', '$templateCache', 'ItemData', 'ImageSharing', streetProfile]);
  })();
