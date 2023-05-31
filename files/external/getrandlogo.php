<?php

if (rand() % 3 == 0) {
    $path = '../assets/images/associazioni/*.png';
}
else {
    $path = '../assets/images/sponsor/*.png';
}

$f = glob($path);

$tot = count($f) - 1;
$a = $f[rand(0, $tot)];

header('Content-Type: image/png');
echo file_get_contents ($a);
