<?php

  function rgb2hex($dec) {
    global $convert;
    $value = $dec;
    $ans = "";
    $i = 0;
    while ($value != 0) {
      $temp = $value % 16;
      if ($i != 2) {
        $ans= $ans.$convert[$temp];
      }
      $value = (int)$value / 16;
      $i += 1;
    }
    return $ans;
  }

  function converter($R, $G, $B) {
  	$var1 = rgb2hex($R);
  	$var2 = rgb2hex($G);
  	$var3 = rgb2hex($B);

  	$hex = $var1.$var2.$var3;
    return $hex;
  }

    $convert = array(
    0 => "0",
    1 => "1",
    2 => "2",
    3 => "3",
    4 => "4",
    5 => "5",
    6 => "6",
    7 => "7",
    8 => "8",
    9 => "9",
    10 => "A",
    11 => "B",
    12 => "C",
    13 => "D",
    14 => "E",
    15 => "F",
  );

  echo converter(255, 255, 255);
?>