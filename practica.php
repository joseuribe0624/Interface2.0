<?php

  $Int =6;
  $float = 6.66;
  $True = true;
  $False = false;
  $string = "Tengo hambre";
  $array = array("key1" => "Tengo","key2" => "muchaHambre");
  $array2 = array("key1","Tengo","key2","muchaHambre");

  class StrValTest{
    private $var1 = "class1";
    public $var2 = "class2";
    public function _toString(){
      return __CLASS__;
    }
    public function example(){
      return "ThisIsATest";
    }
  }

  echo "Int".intval($Int)."<br />";
  echo "float".intval($float)."<br />";
  echo "string".intval($string)."<br />";
  echo "boolean verdadero".intval($True)."<br />";
  echo "boolean Falso".intval($False)."<br />";
  echo "hex-dec".intval(0x165)."<br />";

  echo "float string".strval($float)."<br />";
  $floatString = strval($float)."<br />";
  echo "floatString".gettype($floatString)."<br />";
  echo "falseString".strval($False)."<br />";
  echo "trueString".strval($True)."<br />";
  var_dump ((array)new StrValTest());

 ?>
