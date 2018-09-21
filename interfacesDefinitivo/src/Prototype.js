/*Esta clase debe permitir construir una base para la paella, 
los ingredientes son arroz, sal, agua y aceite. Debe ser un clon exacto para
cada paella. Se debe considerar que si se cambia un elemento del clon, los ingredientes
originales deberán mantenerse.*/


function ricePrototype(proto){
	this.proto = proto;
	this.clone = function(){
		rice.ingredientes = [];
		for(var i = 0; i < proto.ingredientes.length; i +=1){
			rice.ingredientes.push(proto.ingredientes[i]);
		}
		return rice.ingredientes;

	}
	
}


function rice(ingredientes){
	this.ingredientes = ingredientes;
}



function produceBase(){
	var proto = new rice(["arroz","aceite","sal","agua"]);
	var arroz = new  ricePrototype(proto).clone();
	arroz[0] = "arroz integral";
	console.log(proto)
	

	return arroz;


}
