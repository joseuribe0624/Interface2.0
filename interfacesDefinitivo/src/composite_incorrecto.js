
function shoppingCar(typePaella){ 
    this.typePaella = typePaella;
    var arrayElements = [];
    this.compositeProto =function() {
        var objectComposite = {
             add: function(product){
                arrayElements.push(product);
                return arrayElements;
            },

            remove: function (product){
                arrayElements.split(0,arrayElements.length);
                arrayElements.add(product);

                return arrayElements;
        }

     }
           
     return objectComposite;
   }
    
    

}


function buildShoppingCar(arr){
    var car = new shoppingCar("paella"); 
    var resultCar;
    for(var i = 0; i < arr.length;i++){
       resultCar = car.compositeProto().add(arr[i]);

    }

    return resultCar;

}

