<?php

	$host = 'localhost';
	$username = 'root';
	$password = '';
	$database = 'mi_revista';
	$mysqli = new mysqli($host, $username, $password, $database);
	$mysqli -> set_charset("utf8");
	$query = $mysqli -> query("SELECT * FROM ciudad");
	$queryRevista = $mysqli -> query("SELECT * FROM revista");
	
	

?>
