<?php

$filepath = $_GET['f'];

if (substr($filepath, 0, 1) == '/') {
	http_response_code(404);
	die();
}

if (substr_count($filepath, '.') > 1) {
	http_response_code(404);
	die();
}

if (file_exists($filepath) == false) {
	http_response_code(404);
	die();
}

$ext = substr($filepath, strpos($filepath, '.') + 1);
switch($ext) {
	case 'css':
		$mime = 'text/css';
		break;
	case 'js':
		$mime = 'text/javascript; charset=UTF-8';
		break;
	case 'png':
		$mime = 'image/png';
		break;
	case 'woff':
		$mime = 'font/woff';
		break;
	case 'ttf':
		$mime = 'application/font-ttf';
		break;
	case 'eot':
		$mime = 'application/octet-stream';
		break;
	case 'svg':
		$mime = 'image/svg+xml';
		break;
	default:
		http_response_code(404);
		die();
		break;
}

// header("Access-Control-Allow-Origin: *");
header("Cache-Control: public");
header("Content-Description: File Transfer");
header("Content-Disposition: attachment; filename=" . basename($filepath));
header("Content-Type: " . $mime);
header("Content-Transfer-Encoding: binary");
header('Content-Length: ' . filesize($filepath));

readfile($filepath);

