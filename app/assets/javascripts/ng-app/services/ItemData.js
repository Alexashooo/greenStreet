(function(){
    function ItemData(ImageSharing){
       var ItemData = {};

       ItemData.bigImage = "";
       ItemData.newImageID = "";

       ItemData.setBigImage = function(imageID){
         if(imageID != null && imageID.slice(-10) === 'SmallFront'){
            var vehicleIMG = imageID.slice(0,-10)+ "Big";
            ItemData.bigImage = ImageSharing.transport[vehicleIMG].front;
         } else {
           ItemData.bigImage = "";
         }
       };

       //Set new image ID when dropped
       ItemData.setNewImageID = function(imageID){
         if(imageID != null && imageID.slice(-10) === 'SmallFront'){
            ItemData.newImageID = imageID.slice(0,-10)+ "BigFront";
          } else {
            ItemData.newImageID = "";
          }
       };

       return ItemData;

    }

    angular
      .module('greenStreet')
      .factory('ItemData', ['ImageSharing', ItemData]);
})();
