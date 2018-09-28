
//JOSE DAVID GUTIERREZ, CARLOS MERA
function searchTupla(){
	let ident = document.getElementById("search").value;
    let dataEn = 'ident='+ident; 

    $.ajax({
    	type: 'GET',
    	url: 'backend.php',
    	data: dataEn,
    	success:function(resp){
    		$('#res').html(resp)
    	}
    });
}

function insertUser(){
	let ident = document.getElementById("identification").value;
	let f_name = document.getElementById("first_name").value;
	let l_name = document.getElementById("last_name").value;
	let age = document.getElementById("age").value;
	let city = document.getElementById("city").value;
	let dataEn = {
		'ident' : ident,
		'f_name' : f_name,
		'l_name' : l_name,
		'age' : age,
		'city' : city
	};
	$.ajax({
	 	type: 'POST',
    	url: 'backend.php',
    	data: dataEn,
    	success:function(resp){
    		$('#res').html(resp)
    	}

	});
	
}

function suscribeUser(){
	let ident = document.getElementById("identification_sus").value;
	let rev = document.getElementById("magazine").value;
	let dataEn = {
		'ident' : ident,
		'rev' : rev
	};
}
