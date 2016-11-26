(function() {
     function UserData($resource) {
       var UserData = {};

       //this works
       /**
       UserData.Streetprofiles = $resource("/streetprofiles/:id.json", null,
          {
            'query': {method: 'GET', isArray:false},
            'destroy': { method: 'DELETE' }
          }

       );

       UserData.first_streetprofile = UserData.Streetprofiles.query({"id": 1});
       */

       
       return UserData;
     }

angular
   .module('greenStreet')
   .factory('UserData', ['$resource', UserData]);
})();
