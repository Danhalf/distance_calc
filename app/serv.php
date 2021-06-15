<?php
$postData = file_get_contents('php://input');
$data = json_decode($postData, true);

$f = fopen('file.txt', 'a+'); // Открываем файл

foreach ($data as $key => $value) {
   fwrite($f, $key . $value . "\n"); // Записываем данные
}


fclose($f); // Закрываем файл

