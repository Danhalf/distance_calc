<?php
$postData = file_get_contents('php://input');
$data = json_decode($postData, true);

$f = fopen('file.txt', 'a+'); // Открываем файл

foreach ($data as $key => $value) {
   sleep(1);
   fwrite($f, "$key: $value \n--------------------- \n"); // Записываем данные
}

fwrite($f, "\n=||=||=||=||=||=||=||=||=||= \n\n\n\n"); // Записываем данные

fclose($f); // Закрываем файл

