(function() {
     function UserSigninCtrl($scope, UserData) {





         //this works
         /**
         this.first_street_profile = {};
         this.first_street_profile = UserData.first_streetprofile;
         this.destroy_second_street_profile = UserData.Streetprofiles.destroy({"id": 3});
         */
     }

     angular
         .module('greenStreet')
         .controller('UserSigninCtrl', ['UserData', UserSigninCtrl]);
 })();
