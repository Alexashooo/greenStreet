(function() {
     function droppable() {


          return {
              templateUrl: 'droppable.html',
              replace: true,
              restrict: 'E',
              scope: {},
              link: function(scope, element, attrs) {
                //element.sortable();
                 element.droppable({
                    drop: function(event, ui){
                      element.addClass("ui-state-highlight").html("Dropped");
                    }
                 });
              }

            };
      }

      angular
          .module('greenStreet')
          .directive('droppable', droppable);
  })();
