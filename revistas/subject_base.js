function searchTupla(){
	let search = document.getElementById('buscar').value;
	var dataEn = 'buscar=' + search;

	$.ajax({
		type:'GET',
		url : 'src/backend_revista.php',
		data:dataEn,
		success: function(resp){
			$('#res').html(resp)
		}
	});

}

function insertUser(){
	let idendification = document.getElementById('idendificacion').value;
	let firstName = document.getElementById('name').value;
	let lastName = document.getElementById('apellido').value;
	let age = document.getElementById('edad').value;
	let city = document.getElementById('ciudad').value;

	var dataEn = {
		'idendificacion': idendification,
		'firstName': firstName,
		'lastName': lastName,
		'age': age,
		'city': city
	}
	$.ajax({
		type:'POST',
		url: 'src/backend_revista.php',
		data:dataEn,
		success: function(resp){
			$('#res').html(resp)
		}
	})
}

function suscribeUser(){
	let idendificacion = document.getElementById('id').value;
	let revistas = document.getElementById('revistas').value;

	var dataEn = {
		'idendificacion': idendification,
		'revistas': revistas,
	}
	
	$.ajax({
		type:'POST',
		url: 'src/backend_revista.php',
		data:dataEn,
		success: function(resp){
			$('#res').html(resp)
		}
	})
}