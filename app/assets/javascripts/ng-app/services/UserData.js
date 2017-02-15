(function() {
     function UserData($resource, Auth) {
       var UserData = {};

       UserData.user_credentials = {};

       UserData.configSignInUp = {
           headers: {
               'X-HTTP-Method-Override': 'POST'
           }
       };

       UserData.configSignOut = {
         headers: {
              'X-HTTP-Method-Override': 'DELETE'
          }
       };

       //Sending data to Devise to register
       UserData.sendUserDataReg = function(user_credentials, config) {
          Auth.register(user_credentials, config).then(function(registeredUser) {
              console.log(registeredUser);
          }, function(error) {
              // Registration failed...
          });
       };


       //Sending data to Devise to Sign In
       UserData.sendUserDataSignIn = function(user_credentials,config) {
            Auth.login(user_credentials, config).then(function(user) {
              console.log(user);
            }, function(error) {
              // Authentication failed...
            });
       };

       UserData.userSignOut = function() {
            Auth.logout(UserData.configSignOut).then(function(oldUser) {
                alert(oldUser.email + "you're signed out now.");
            }, function(error) {
                // An error occurred logging out.
            });
       };


       var streetProfilesApi = $resource('/api/v1/streetprofiles/:id', {'save': {method: 'POST'}});

       //Save streetProfile data by user
       UserData.saveStreetProfile = function(){
            streetProfilesApi.save({
                name: 'Alexas first',
                street_configuration: UserData.currentStateOfStreetprofile(),
                user_id: Auth._currentUser.id
           });
           //console.log(UserData.currentStateOfStreetprofile());
       };



       return UserData;
     }

angular
   .module('greenStreet')
   .factory('UserData', ['$resource', 'Auth', UserData]);
})();
