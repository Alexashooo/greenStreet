(function() {
  function UserData($resource) {

    return $resource("/users/:id",
      {
        id: "@id"
        // resController: "@resController"
      },
      {
        update: {method: "PUT"},
        query: {method: "GET",isArray: true}
      }
    );

      //  var UserData = {};
       //
      //  UserData.user_id = $resource('current_user');
       //
      //  return UserData;
  }

angular
   .module('greenStreet')
   .factory('UserData', ['$resource', UserData]);
})();
