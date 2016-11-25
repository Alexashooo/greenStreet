(function() {
     function UserData($resource) {
       var UserData = {};
       var streetprofiles = $resource("/streetprofiles/:id.json", {id: "@id"}, {'get': {method: 'GET'}});
       UserData.test_streetprofile = streetprofiles.get({id: 1});
       var streetprofiles2 = $resource("/streetprofiles/:id.json", null , {'save': {method: 'POST'}});
       UserData.test_streetprofile2 = streetprofiles2.save({id: 2});

       return UserData;
     }

angular
   .module('greenStreet')
   .factory('UserData', ['$resource', UserData]);
})();
