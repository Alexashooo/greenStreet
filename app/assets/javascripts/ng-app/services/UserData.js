(function() {
     function UserData($resource, Auth) {
       var UserData = {};


    


       //This works, getting current_user
       //UserData.current_user = Auth.currentUser();

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
   .factory('UserData', ['$resource', 'Auth', UserData]);
})();
