/*Esta clase define los elementos que contiene un producto de la factoria, 
lo que para este caso permite determinar los ingredientes segun el tipo de paella*/

/*Invoca la funcion que define los ingredientes segun el tipo de paella*/
function paellaFactoryMethod(){
    this.crearPaella = function(type){
        if(type === "Mariscos"){
            return paellaMariscos();
        }
        if(type == "Vegetariana"){
            return paellaVegetariana();
        }
        if(type == "Carnepollo"){
            return  paellaCarneYPollo();
        }
    }
}


/*Se construye el producto final a partir de los ingredientes definidos*/
function paellaProduct(){

    this.product = function(ingredientes){
        this.ingredientes = ingredientes;
    }
}

/*Se construye una funcion propia para crear una paella segun el tipo*/
function paellaMariscos(){

	var paellaGetProduct = new paellaProduct();	
    var ingredientesMariscos = ["calamares", "mejillones", "tomate", "camarones"];
    return new paellaGetProduct.product(ingredientesMariscos);
}

function paellaVegetariana(){
    var paellaGetProduct = new paellaProduct();
    var ingredientesVegetariana = ["lechuga","tomate","zanahoria","pepino"];
    return new paellaGetProduct.product(ingredientesVegetariana);
}

function paellaCarneYPollo(){
    var paellaGetProduct = new paellaProduct();
    var ingredientesCarneYPollo = ["carne","pollo","tomate","lechuga"]
    return new paellaGetProduct.product(ingredientesCarneYPollo);
}

/******* Construir las funciones para las paellas que faltan ******/

/*Funcion obtiene le tipo de la paella desde la fabrica*/
function generatePaella(typePaella){

	var factory = new paellaFactoryMethod();
    var paella = factory.crearPaella(typePaella);
    return paella;
}

