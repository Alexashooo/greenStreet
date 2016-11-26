(function() {
     function LandingCtrl(UserData) {
         this.hello = "This is Green street app, enjoy!";






         //this works
         /**
         this.first_street_profile = {};
         this.first_street_profile = UserData.first_streetprofile;
         this.destroy_second_street_profile = UserData.Streetprofiles.destroy({"id": 3});
         */
     }

     angular
         .module('greenStreet')
         .controller('LandingCtrl', ['UserData', LandingCtrl]);
 })();
