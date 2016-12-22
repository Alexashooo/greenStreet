(function() {
     function draggable($document) {

          return {
              templateUrl: 'draggable.html',
              replace: true,
              restrict: 'E',
              scope: {},
              link: function(scope, element, attrs) {
                 element.draggable({
                    revert: 'invalid',
                    tolerance: 'fit'
                 });
              }
            };
      }

      angular
          .module('greenStreet')
          .directive('draggable', ['$document', draggable]);
  })();
