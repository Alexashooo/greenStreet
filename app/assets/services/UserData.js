(function() {
     function UserData($resource) {
       var UserData = {};

       UserData.user_id = $resource('current_user');

       return UserData;
     }

angular
   .module('greenStreet')
   .factory('UserData', UserData);
})();
