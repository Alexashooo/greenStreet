(function() {
     function LandingCtrl(UserData) {
         this.hello = "This is Green street app, enjoy!";
         this.test_streetprofile = UserData.test_streetprofile;
         this.test_streetprofile_create = UserData.test_streetprofile_create


     }

     angular
         .module('greenStreet')
         .controller('LandingCtrl', ['UserData', LandingCtrl]);
 })();
