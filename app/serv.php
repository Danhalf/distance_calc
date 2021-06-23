<?php
$postData = file_get_contents('php://input');
$data = json_decode($postData, true);

$f = fopen('file.txt', 'a+'); 

foreach ($data as $key => $value) {
   sleep(1);
   fwrite($f, "$key: $value \n--------------------- \n"); 
}

fwrite($f, "\n=||=||=||=||=||=||=||=||=||= \n\n\n\n"); 

fclose($f); 

