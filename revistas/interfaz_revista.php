<?php

//JOSE DAVID GUTIERREZ, CARLOS MERA
  include("conexion_bd.php");
  include("backend.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
  <link rel="stylesheet" href="styles.css">
  <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700" rel="stylesheet">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
  <script src="https://code.jquery.com/jquery-3.2.1.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
  <title>TodoRevistas | Tienda online</title>
</head>
<body>
  <nav class="navbar navbar-expand-lg navbar-light">
    <a class="navbar-brand" href="#">
      <img src="assets/logo.png" alt="">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Temáticas</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contacto</a>
        </li>
      </ul>
    </div>
  </nav>
  <section class="container-fluid circle">
    <div class="row">
      <div class="left-box col col-lg-4 col-12 text-center">
        <p class="form-title">Conoce si te encuentras registrado en nuestro sistema</p>
        <form  onsubmit="searchTupla(); return false;">
          <p class ="field-input input-id">
            <input class="input" type="text" name="search" placeholder="Numero de identificación"  id="search">
          </p>
          <p>
            <button type="submit" class="boton">Buscar</button>
          </p>
        </form>
        <p class="content">
          En el panel izquierdo observa los resultados de las transacciones realizadas en el sistema conoce si estás registrado, o suscrito a una revista. Si no lo estás es momento de suscribirte para que no te pierdas ningún detalle de los mejores contenidos.
        </p>
        <p class="form-title">Suscribirme a una revista</p>
        <form method="GET" onsubmit="suscribeUser(); return false;">
          <p class="field-input input-id1">
            <input id="identification_sus" class="input" type="text" placeholder="Numero de identificación">
          </p>
          <p class="field-input input-revista">
            <select class="input" id="magazine">
              <option value="#">Seleccionar una revista</option>
                  <?php 
                while($valores = mysqli_fetch_array($queryRevista))
                {
                  echo '<option value="'.$valores['id_revista'].'">'.$valores['nombre_revista'].'</option>';
                }
              ?>
              </select>
          </p>
          <p>
            <button class="boton">Suscribirme</button>
          </p>
        </form>
      </div>
      <div class="right-box col col-12 offset-lg-1 col-lg-7">
        <div class="float-plant">
          <img src="assets/planta.png" alt="">
        </div>
        <div class="row">
          <div class="col-md-6 offset-md-3">
            <div class="title">
              <h1>Suscríbete a tus revistas favoritas por tan solo $29.000 al mes</h1>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="response-box col-md-12">
            <h3 id="res">
             
            </h3>
          </div>
        </div>
        <div class="row">
          <div class="img-box col-md-12">
            <img class="pappers" src="assets/revistas_logos.png" alt="">
            <img class="cell" src="assets/celular.png" alt="">
          </div>
        </div>

      </div>
    </div>
  </section>
  <div class="container-fluid letrero">
    <h2 class="title-letrero">Registrate en nuestro sistema para suscribirte a una revista</h2>
  </div>
  <div class="contenedor">
    <form method="POST" onsubmit="insertUser(); return false;">
      <div class="form-group">
        <div class="titleCont">
          <p class="title3" id="res2"><strong>Ingresa tus datos aquí si aún no estás registrado en el sistema</strong></p>
        </div>
          <div class="row">
            <div class="col">
              <input class="input all" placeholder="Identificación" type="text" id="identification">
          </div>
          <div class="col">
            <input class="input all" placeholder="Nombre" type="text" id="first_name">
          </div>
            <div class="col">
              <input class="input all"  placeholder="Edad" type="text"  id="age">
          </div>
        </div>
        <br>
        <div class="row">
          <div class="col">
            <input class="input all" placeholder="Correo" type="text" id="email">
          </div>
          <div class="col">
            <input class="input all" placeholder="Apellido" type="text"  id="last_name">
          </div>
            <div class="col">
            <select class="input all" id="city">
              <option class="opciones" value="#">Seleccionar una opción</option>
              <?php 
                while($valores = mysqli_fetch_array($query))
                {
                  echo '<option value="'.$valores['cod_ciudad'].'">'.$valores['nombre_ciudad'].'</option>';
                }
              ?>
            </select>
            </div>
        </div>
      </div>
    
      <div class="row">
        <div class="col-9">
            <p class="paragraph">Al hacer clic en "registrarme" estoy aceptando los terminos y condiciones, politicas de datos y cookies</p>
          </div>
        <div class="col-3 buttonA">
          <button class="boton">Registrarse</button>
        </div>
      </div>
    </form>
  </div>
  <footer class="container-fluid site-footer">
    <div class="row">
      <div class="col-md-2 footer-content">
        <img class="imgBottom" src="assets/logo.png">
      </div>
      <div class="col info">
        <div class="col seccion">
          <p style="margin: 0;" class="form-title">Secciones</p>
          <p class="p-footer">Inicio</p>
          <p class="p-footer">Tematicas</p>
          <p class="p-footer">Contacto</p>
        </div>
        <div class="col-md-6 follow">
          <p style="margin-bottom: 15px;" class="form-title">Siguenos en redes sociales</p>
          <div class="row images">
            <img src="assets/icon_ubicacion.png">
            <img src="assets/icon_facebook.png">
            <img src="assets/icon_linkeid.png">
          </div>
        </div>
        <div class="col write">
          <p>Escribenos al correo <br> soporte@todorevistar.com</p>
          <p>TodoRevistas, tienda online© 2018</p>
        </div>
      </div>  
    </div>
  </footer>
  <script type="text/javascript" src="subject_base.js"></script>
</body>
</html>