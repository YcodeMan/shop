<?php
header('Access-Control-Allow-Origin:*');
$json_string = file_get_contents('../json/user.json');
$data = json_decode($json_string, true);

$json_string = json_encode($data);
print_r($data);
file_put_contents('../json/user.json', $json_string);
echo "<script>location.href='./../login/login.html';</script>";        

?>