(function(){
    function UserPersistence(cookies){
       var UserPersistence = {};

       UserPersistence.setCookieData = function(email) {
            eMail = email;
            cookies.set("email", eMail);
       };

       UserPersistence.getCookieData = function() {
            eMail = cookies.get("email");
            return eMail;
       };

       UserPersistence.clearCookieData = function() {
            eMail = "";
            cookies.remove("email");
       };

       return UserPersistence;

    }

    angular
      .module('greenStreet')
      .factory('UserPersistence', ['cookies', UserPersistence]);
})();
