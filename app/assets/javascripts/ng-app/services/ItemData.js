(function(){
    function ItemData(ImageSharing){
       var ItemData = {};

       ItemData.bigImage = "";


       ItemData.setBigImage = function(imageID){
         if(imageID != null && imageID.slice(-10) === 'SmallFront'){
            var vehicleIMG = imageID.slice(0,-10)+ "Big";
            ItemData.bigImage = ImageSharing.transport[vehicleIMG].front;
         } else {
           ItemData.bigImage = "";
         }
       };

       return ItemData;

    }

    angular
      .module('greenStreet')
      .factory('ItemData', ['ImageSharing', ItemData]);
})();
