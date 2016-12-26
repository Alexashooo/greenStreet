(function() {
     function streetProfile() {


          return {
              templateUrl: 'street_profile.html',
              replace: true,
              restrict: 'E',
              scope: {},
              link: function(scope, element, attrs) {

                 angular.element(element[0].querySelector('.itemlist')).droppable({
                      drop: function(event, ui) {
                        //prevent profile items to change while drag/drop
                        if($(ui.draggable).hasClass('dirtyitem')){
                          //remove class if draggable is dropped
                           $(ui.draggable).removeClass('dirtyitem');
                           //add class if draggable is dropped
                           $(ui.draggable).addClass('item');
                           $(ui.draggable).height($('.item').css('height'));
                           $(ui.draggable).width($('.item').css('width'));
                          
                        }
                      }
                   }).disableSelection().sortable({
                     scroll: true,
                     placeholder: 'placeholder',
                     axis: 'x'
                   });

                //add resize on every element in droppable
                //for(var i =0; i < element[0].children.length; i++) {
                    //angular.element(element[0].children[i]).on({

                    //})

                //}



              }
            };
      }

      angular
          .module('greenStreet')
          .directive('streetProfile', streetProfile);
  })();
