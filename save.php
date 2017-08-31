<?php
//error_reporting(0);
$coord = $_REQUEST['lon']."|".$_REQUEST['lat']."|";

$date = date('y-m-d h:i')."|";

$ip = $_SERVER['REMOTE_ADDR']."|";

$ua = $_SERVER['HTTP_USER_AGENT'];

$data = $coord.$date.$ip.$ua."\r\n";

$f = fopen('log.txt', 'a');

fwrite($f,$data);

fclose($f);
?>