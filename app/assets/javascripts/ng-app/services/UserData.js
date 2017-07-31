(function() {
     function UserData($resource, Auth, $state, UserPersistence) {
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
              //UserPersistence.setCookieData(registeredUser.email);
              console.log(registeredUser.id);
          }, function(error) {
               alert("User with the email address already exist!");
               $state.go('userSignUp');
          });
       };


       //Sending data to Devise to Sign In
       UserData.sendUserDataSignIn = function(user_credentials,config) {
            Auth.login(user_credentials, config).then(function(user) {
              UserPersistence.setCookieData(user.email);
              console.log(UserPersistence.getCookieData());
            }, function(error) {
              alert("Sign In failed, please check you email and/or password!");
              $state.go('userSignIn');
            });
       };

       UserData.userSignOut = function() {
            Auth.logout(UserData.configSignOut).then(function(oldUser) {
                alert("You're signed out now.");
            }, function(error) {
                alert("Sign Out failed, please try again!");
            });
       };


       var streetProfilesApi = $resource('streetprofiles/:id', {'save': {method: 'POST'}});

       //Save streetProfile data by user
       UserData.saveStreetProfile = function(){
            streetProfilesApi.save({
                name: 'My profile',
                street_configuration: UserData.currentStateOfStreetprofile(),
                user_id: Auth._currentUser.id
           });
           //console.log(UserData.currentStateOfStreetprofile());
       };



       return UserData;
     }

angular
   .module('greenStreet')
   .factory('UserData', ['$resource', 'Auth', '$state', 'UserPersistence',UserData]);
})();
