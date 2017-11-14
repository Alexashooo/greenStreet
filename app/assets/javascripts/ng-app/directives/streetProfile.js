(function() {
     function streetProfile($compile, $templateCache, ItemData, ImageSharing, UserData, $timeout) {

          return {
              templateUrl: 'street_profile.html',
              replace: true,
              restrict: 'E',
              scope: {
              },
              link: function(scope, element, attrs) {

                    // cashing items to load with first time usage
                    var onloadItems = $templateCache.get('onload_items.html');

                    //adding "default" items(default profile) on first load
                    var deafultElementsOnStart = function(onloadItems){
                        element.append($compile(onloadItems)(scope));
                    };

                    deafultElementsOnStart(onloadItems);

                    //returns string with atributes of elements in items that makes current state of the street profile
                    var currentStateOfStreetprofile = function(){
                        var streetProfileString = "";
                        for (var i = 0; i < element[0].children.length; i++) {
                            var imgID = element[0].children[i].querySelector("img").getAttribute('id');
                            var elementWidth = element[0].children[i].querySelector(".profile-item-container").offsetWidth;
                            var directionIndicator = "left";  ///!!!!!!!!!!!!!!!!!!!!!!this is example, more options should be implemented
                            if(i===element[0].children.length-1){
                                streetProfileString =  streetProfileString + imgID + "-" + elementWidth + "-" + directionIndicator; //use REGEX?!!!!!!!!!!!!??????????
                            } else {
                                streetProfileString =  streetProfileString + imgID + "-" + elementWidth + "-" + directionIndicator + ",";
                            }
                        }
                        return streetProfileString;
                    }


                    UserData.currentStateOfStreetprofile = currentStateOfStreetprofile;


                    //defined values before resizing starts and they get new values from selected element
                    var itemStartWidth = 0;
                    var profileStartLeft = 0;

                    var extraSpaceWhileSorting = 40;

                    //item default Width applied on dropped element
                    var itemDefaultWidth = 148;

                    //item (sortable element) start width and start "left" position of it's parent (street profile)
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
                           //because resizable - handle is in async related to the element and at one moment stops to hover
                           ui.element.find('.options-container').css("display", "block");
                     },
                     handles: 'e,w',
                     resize: function(event, ui){
                       referenceForResizing(element, ui.element);
                       scope.$apply();

                     },
                     stop: function(event, ui){
                       //because resizable - handle is in async related to the element and at one moment stops to hover
                       ui.element.find('.options-container').css("display", "");
                     }
                   });

                   element.disableSelection().sortable({
                     placeholder: 'placeholder',
                     // custom handle
                     handle: '.item-transportmode-pavement, .item-transportmode',
                     sort: function(event, ui){
                         ui.placeholder.css('width', parseInt(ui.item.css('width'))+extraSpaceWhileSorting);
                     }
                     }).droppable({
                      drop: function(event, ui) {
                        var draggableElement = $(ui.draggable);
                        //prevent street profile items to change while sorting
                        if(draggableElement.hasClass('dirty-item') || draggableElement.hasClass('green-item')){

                           //setting a new "Big" image when dropped
                           ItemData.setBigImage(draggableElement.find('img').attr("id"));

                           //setting a new ID when dropped
                           ItemData.setNewImageID(draggableElement.find('img').attr("id"));

                          //remove classes  and HTML if draggable is dropped
                           draggableElement.removeClass().empty().addClass('item-container');

                            //adjusting height and width
                           draggableElement.height(parseInt($('.street-profile').css('height')));
                           draggableElement.width(itemDefaultWidth);

                           //move the list(streetProfile) to left while adding items
                           element.css('left', parseInt(element.css('left'))- parseInt(draggableElement.css('width'))/2);

                           //making street profile elements resizible
                           draggableElement.resizable({
                             start: function(event, ui){
                                 startValuesWhileResizing(element, ui.element);
                                 //because resizable - handle is in async related to the element and at one moment stops to hover
                                 ui.element.find('.options-container').css("display", "block");
                             },

                             handles: 'e, w',
                             resize: function(event, ui){
                                referenceForResizing(element, ui.element);
                                scope.$apply();
                             },
                             stop: function(event, ui){
                               //because resizable - handle is in async related to the element and at one moment stops to hover
                               ui.element.find('.options-container').css("display", "");
                             }
                           });

                           //Adding HTML for new items dropped in streetProfile
                           var profileItemScope = scope.$new(true); //compile on a new scope
                           draggableElement.append($compile('<profile-item></profile-item>')(profileItemScope));
                           $timeout(function() {
                                ItemData.setExtraOptions(draggableElement.find('.extra-options-second-row'), draggableElement.find('img').attr("id"), profileItemScope);
                                console.log(profileItemScope);
                           });


                         }
                      }
                    });

              }
            };
      }

      angular
          .module('greenStreet')
          .directive('streetProfile', ['$compile', '$templateCache', 'ItemData', 'ImageSharing', 'UserData', '$timeout', streetProfile]);
  })();
