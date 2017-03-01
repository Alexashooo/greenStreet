(function(){
    function ItemData(ImageSharing){
       var ItemData = {};

       ItemData.bigImage = "";
       ItemData.newImageID = "";


       ItemData.setBigImage = function(imageID){
         if(imageID != null && imageID.slice(-10) === 'SmallFront'){
            var vehicleImg = imageID.slice(0,-10)+ "Big";
            ItemData.bigImage = ImageSharing.transport[vehicleImg].front;
            ItemData.imageFactor = ImageSharing.transport[vehicleImg].scaleFactor;
         } else {
           ItemData.bigImage = "";

         }
       };

       //Setting new image ID when dropped
       ItemData.setNewImageID = function(imageID){
         if(imageID != null && imageID.slice(-10) === 'SmallFront'){
            ItemData.newImageID = imageID.slice(0,-10)+ "BigFront";
          } else {
            ItemData.newImageID = "";
          }
       };

       //reference image/container height or value for scaling
       ItemData.referenceScale = 152;

       return ItemData;

    }

    angular
      .module('greenStreet')
      .factory('ItemData', ['ImageSharing', ItemData]);
})();
