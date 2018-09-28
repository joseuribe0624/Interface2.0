<?php

require_once './conexion_bd.php';
	// capturar información del formulario de busqueda
	$observerClass = new Observer;
	$observerClass1 = new Observer;

	if(isset($_GET['ident'])){
		$obj = $_GET['ident'];
		$observerClass->getUser($mysqli,$obj);
	}

	if(isset($_POST['ident']) && isset($_POST['f_name']) && isset($_POST['l_name']) && isset($_POST['age']) && isset($_POST['city'])){
		$obj = array($_POST['ident'],$_POST['f_name'],$_POST['l_name'],$_POST['age'],$_POST['city']);
		//var_dump($obj);
		//die();
		$observerClass1->insertUser($mysqli,$obj);
		
	}

	class Observer{
		function getUser($mysqli,$obj){
			$queryRevista = $mysqli -> query ("SELECT nombre, apellido FROM usuario WHERE id_usuario =".$obj."");
			$valores = mysqli_fetch_array($queryRevista);
			if (is_array($valores)==false){
				echo "No estas registrado, por favor registrate antes de realizar una suscripción";
			}else{
				echo "Hola <b>".$valores['nombre']."</b> ya te encuentras registrado";
			}
		}

		function insertUser($mysqli, $obj){

			$queryRevista =$mysqli -> query("INSERT INTO usuario (id_usuario, nombre, apellido,edad)
				VALUES (".$obj[0].",'".$obj[1]."','".$obj[2]."',".$obj[3].",'".$obj[4]."')");
			if (mysqli_query($conn, $sql)) {
			    echo "New record created successfully";
			} else {
			    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
			}

			
		}

		function suscribeUser($mysqli, $obj){}
}
?>