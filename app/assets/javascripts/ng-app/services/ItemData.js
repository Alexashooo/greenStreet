(function(){
    function ItemData(ImageSharing, $compile){
       var ItemData = {};

       ItemData.bigImage = "";
       ItemData.newImageID = "";


       ItemData.setBigImage = function(imageID){
         if(imageID != null && imageID.slice(-10) === 'SmallFront'){
            var vehicleImg = imageID.slice(0,-10)+ "Big";
            ItemData.bigImage = ImageSharing.transport[vehicleImg].front;
            ItemData.imageFactor = ImageSharing.transport[vehicleImg].scaleFactor;
         }
         //remove this after test!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
         //make separate option to change direction of the vehicle
         else if(imageID != null && imageID.slice(-9) === 'SmallBack'){
           var vehicleImg = imageID.slice(0,-9)+ "Big";
           ItemData.bigImage = ImageSharing.transport[vehicleImg].back;
           ItemData.imageFactor = ImageSharing.transport[vehicleImg].scaleFactor;
         }
           else {
           ItemData.bigImage = "";

         }
       };

       //Setting new image ID when dropped
       ItemData.setNewImageID = function(imageID){
         if(imageID != null && imageID.slice(-10) === 'SmallFront'){
              ItemData.newImageID = imageID.slice(0,-10)+ "BigFront";
         } else if(imageID != null && imageID.slice(-9) === 'SmallBack'){
              ItemData.newImageID = imageID.slice(0,-9)+ "BigBack";
         }
          else {
              ItemData.newImageID = "";
          }
       };

       //reference image/container height or value for scaling
       ItemData.referenceScale = 152;

       //used profile element
       var profileItem="";

       //set number of extra options for each transport mode
       var numberOfExtraOptions = function(imageID){
          //different images, can not refactor yet
          if(imageID != null && imageID.slice(-8) === 'BigFront'){
              profileItem = imageID.slice(0,-8);
          }
          else if(imageID != null && imageID.slice(-7) === 'BigBack'){
              profileItem = imageID.slice(0,-7);
          };

          //how many options will item have
          switch(profileItem){
              case "elcar": case "car": case "bus":
                  return 4;
                  break;
              case "sidewalk": case "tree": case "tram": case "cyclist":
                  return 2;
                  break;
               default:
                  return 0;
          }
       };


       //which group profile item belongs to
       var getVehiclesGroup = function(profileItem){
          vehicleMatrix = [
              ['elcar', 'car', 'bus'],
              ['cyclist'],
              ['tram'],
              ['sidewalk', 'tree']
          ];

          var vehiclesGroups = ['roadVehiclesGroup', 'cyclistsGroup', 'railVehiclesGroup', 'walkingGroup'];
          for(var i=0;i<vehicleMatrix.length; i++){
              if(vehicleMatrix[i].indexOf(profileItem) > -1){
                 return vehiclesGroups[i];
              }
          };
       };

       ItemData.setExtraOptions = function(element, imageID, scope){
         if(element instanceof jQuery){
           //insert placeholders for elements
           for(var i=0;i<numberOfExtraOptions(imageID); i++){
             element.append($compile("<div class='extra-option' ng-click='applyExtraOption()'></div>")(scope));
           };
           //insert images for elements
           var objKeys = Object.keys(ImageSharing.extraOptions[getVehiclesGroup(profileItem)]);
           element.children().each(function(index){
              $(this).append($compile("<div></div>")(scope));
              $(this).first().append($compile("<img ng-src='" + ImageSharing.extraOptions[getVehiclesGroup(profileItem)][objKeys[index]] +"'" + ">")(scope));
              console.log();
           });

         } else {
           return -1;
         }

       };


       return ItemData;

    }

    angular
      .module('greenStreet')
      .factory('ItemData', ['ImageSharing', '$compile', ItemData]);
})();
