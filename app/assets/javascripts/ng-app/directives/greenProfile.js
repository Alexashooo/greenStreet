(function() {
     function greenProfile() {

          return {
              templateUrl: 'green_profile.html',
              replace: true,
              restrict: 'E',
              scope: {},
              link: function(scope, element, attrs) {
                for(var i =0; i < element[0].children.length; i++) {
                    angular.element(element[0].children[i]).draggable({
                        helper: 'clone',
                        revert: "invalid",
                        connectToSortable: '.street-profile'
                    })

                }
              }

            };
      }

      angular
          .module('greenStreet')
          .directive('greenProfile', greenProfile);
  })();
