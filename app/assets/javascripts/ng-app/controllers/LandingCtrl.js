(function() {
     function LandingCtrl(UserData) {
         this.hello = "This is Green street app, enjoy!";
         this.user_id = UserData.user_id;


     }

     angular
         .module('greenStreet')
         .controller('LandingCtrl', ['UserData', LandingCtrl] );
 })();
