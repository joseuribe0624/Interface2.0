let menuItems = ["mariscos","vegetariana","carne y pollo"];

var arrayElements = [];
this.lastInput = 0;
this.products = new Set()
this.productsCheckbox = ""
this.prInput = new Set();

function getValueType (paellaType){
	this.paellaType = paellaType
	if (this.products.has(paellaType.value)) {
		this.products.delete(paellaType.value)
	} else {
		this.products.add(paellaType.value)
	}
	this.lastInput = 0;
}

function getValueCheck(){
	let elements=document.getElementsByName("tipo");

	let checkedValue = null; 
	for (let i=0; elements[i]; i++){
		if(elements[i].checked){
			checkedValue = elements[i].value
			this.productsCheckbox = checkedValue
			break
		}
	}
	this.lastInput = 1;
}

function getValueInput(value){
	let l = value.value.split(",")
	this.prInput = new Set (l.map(item => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()));
	this.lastInput = 2;
}


var temp = [];
function buildPaella(){
	var carro, implement;
	if (this.lastInput == 0) {
		implement = new ConcreteImplementorSelect()
		implement.getValues(this.products)
		carro = implement.buildCar()
	} else if (this.lastInput == 1) {
		implement = new ConcreteImplementorCheckbox()
		implement.getValues(this.productsCheckbox)
		carro = implement.buildCar()
	} else {
		implement = new ConcreteImplementorInputSelect()
		implement.getValues(this.prInput)
		carro = implement.buildCar()
	}
	var base = produceBase()
	var lol = executeSingleton()
	console.log(carro)
	console.log(lol)
	console.log(base)

	var decorator = new executeDecorator(menuItems)
	console.log(decorator)
}

var res ;
function getValuePrice(paellaPrice){
	this.paellaPrice = paellaPrice;
	console.log(paellaPrice.value)
	var valpaella = parseInt(paellaPrice.value,10);
	console.log(valpaella*0.19);
	var paellaIva =  valpaella- (valpaella*0.19) ;
	console.log(paellaIva);


	res =  paellaPrice.value;
}

function getValueCoin(valueCoin){
	this.valueCoin = valueCoin
	if(valueCoin.value == "dolar"){
		let j = calculatePaellaPrice(res);
		console.log(j);
	}
	else if(valueCoin.value == "euro"){
		console.log(calculatePaellaPriceEuro(res));
	}
}