(function() {
     function LandingCtrl(UserData) {
         this.hello = "This is Green street app, enjoy!";
         this.users = UserData.query();
         console.log(this.users);


     }

     angular
         .module('greenStreet')
         .controller('LandingCtrl', ['UserData', LandingCtrl] );
 })();
