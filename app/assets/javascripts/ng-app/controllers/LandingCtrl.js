(function() {
     function LandingCtrl(UserData) {
         this.hello = "This is Green street app, enjoy!";
         this.test_streetprofile = UserData.test_streetprofile;
         this.test_streetprofile2 = UserData.test_streetprofile2; 

     }

     angular
         .module('greenStreet')
         .controller('LandingCtrl', ['UserData', LandingCtrl]);
 })();
