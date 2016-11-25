(function() {
     function UserData($resource) {
       var UserData = {};
       var Streetprofile = $resource("/streetprofiles/:id.json", {user_id:1, id: "@id"},
       {
         'get':    {method:'GET'},
         'save':   {method:'POST', isArray: false},
         'query':  {method:'GET', isArray:true},
         'remove': {method:'DELETE'},
         'delete': {method:'DELETE'}
       });

       var new_streetprofile = new Streetprofile();

       new_streetprofile.name = "Pozeska";
       new_streetprofile.street_configuration = "1,4,16";
       new_streetprofile.user_id = 3;
       new_streetprofile.$save();

       UserData.test_streetprofile_create = new_streetprofile.name;



       return UserData;
     }

angular
   .module('greenStreet')
   .factory('UserData', ['$resource', UserData]);
})();
