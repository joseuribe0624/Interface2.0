<?php

//JOSE DAVID GUTIERREZ, CARLOS MERA
require_once './conexion_bd.php';
	// capturar información del formulario de busqueda
	$observerClass = new Observer;
	//$observerClass1 = new Observer;
	if(isset($_GET['ident'])){
		$obj = $_GET['ident'];
		$observerClass->getUser($mysqli,$obj);
	}
	if(isset($_POST['ident']) && isset($_POST['f_name']) && isset($_POST['l_name']) && isset($_POST['age']) && isset($_POST['city']) && isset($_POST['email'])){
		$obj = array($_POST['ident'],$_POST['f_name'],$_POST['l_name'],$_POST['age'],$_POST['city'],$_POST['email']);
		$observerClass->insertUser($mysqli,$obj);
		
	}
	if(isset($_POST['ident']) && isset($_POST['rev'])){
		$obj = array($_POST['ident'],$_POST['rev']);
		$observerClass->suscribeUser($mysqli,$obj);
	}

	function check($mysqli,$obj){
		$queryRevista = $mysqli -> query ("SELECT nombre, apellido FROM usuario WHERE id_usuario =".$obj."");
		$valores = mysqli_fetch_array($queryRevista);
		if (is_array($valores)==false){
			return False;
		}else{
			return True;
		}
	}
	class Observer{
		function getUser($mysqli,$obj){
			$queryRevista = $mysqli -> query ("SELECT nombre, apellido FROM usuario WHERE id_usuario =".$obj."");
			$valores = mysqli_fetch_array($queryRevista);
		
			if (is_array($valores)==false){
				echo "No estas registrado, por favor registrate antes de realizar una suscripción";
			}else{
				echo $valores['nombre']."ya te encuentras registrado en el sistema.";
			}
		}

		function insertUser($mysqli, $obj){
			//verificar si el usuario sea un usuario nuevo
			$queryRevista = $mysqli -> query ("SELECT nombre, apellido FROM usuario WHERE id_usuario =".$obj[0]."");
			$valores = mysqli_fetch_array($queryRevista);
			if (is_array($valores)==false){
				$queryRevista =$mysqli -> query ("INSERT INTO usuario (id_usuario, nombre, apellido,edad,cod_ciudad,email)
			    VALUES ('".$obj[0]."','".$obj[1]."','".$obj[2]."','".$obj[3]."','".$obj[4]."','".$obj[5]."')");

			    $result = mysqli_query($mysqli,$queryRevista);
			    
				if($result==False){
					echo $obj[1].", tu registro ha sido exitoso, ahora puedes suscribirte";
				}else{
					echo "Intente de nuevo";
				}
			}else{
				echo $valores[0].", tu registro ha sido exitoso, ahora puedes suscribirte";

			}

			
		}
		function suscribeUser($mysqli, $obj){
			$queryRevista = $mysqli -> query ("SELECT nombre, apellido FROM usuario WHERE id_usuario =".$obj[0]."");
			$valores = mysqli_fetch_array($queryRevista);
			if (is_array($valores)==false){
				echo "No estas registrado, por favor registrate antes de realizar una suscripción";
			}else{
				$queryRevista =$mysqli -> query ("INSERT INTO suscriptores (id_revista, id_usuario)
			    VALUES ('".$obj[1]."','".$obj[0]."')");
				//get the name
				$queryRevistaName = $mysqli -> query ("SELECT nombre_revista FROM revista WHERE id_revista =".$obj[1]."");

				$nameRevista = mysqli_fetch_array($queryRevistaName);

			    $result = mysqli_query($mysqli,$queryRevista);
				echo "Te acabas de registrar a ".$nameRevista[0];

			}
			
		}
}
?>