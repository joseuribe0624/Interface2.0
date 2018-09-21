/*colaboracion del codigo con Jose Uribe, Juan P Giraldo, Josue Peña, Carlos mera*/

function Implementor(){
    this.values = [];

    this.buildCar = function () {
        return new buildShoppingCar(this.values);
    }
}

function ConcreteImplementorCheckbox() {
    Implementor.call(this);

        this.getValues = function(input) {
            let factory = executeFactory(input);
            let paellaProduct = generatePaella(factory.type);
            this.values.push(paellaProduct);
        }
}

function ConcreteImplementorInputSelect() {
    Implementor.call(this);
    this.posibilities = new Set(["Mariscos", "Vegetariana", "Carnepollo"])
 
    this.getValues = function(input) {
    let intersection = new Set(
        [...this.posibilities].filter(x => input.has(x)));
    let products = Array.from(intersection)
    for (i in products) {
        let factory = executeFactory(products[i])
        let paellaProduct = generatePaella(factory.type)
        this.values.push(paellaProduct)
   }
 }
}


function ConcreteImplementorSelect() {
    Implementor.call(this);

    this.getValues = function(input) {
        let products = Array.from(input)
        let final = []
        for (i in products) {
            let factory = executeFactory(products[i])
            let paellaProduct = generatePaella(factory.type)
            this.values.push(paellaProduct)
        }
    }
}