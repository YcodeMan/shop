<?php
header('Access-Control-Allow-Origin:*');
$json_string = file_get_contents('../json/user.json');
$data = json_decode($json_string, true);
$uname=$_GET['username'];
$flag= true;
// var_dump($data);die;
foreach ($data as $key => $val){
    if ($flag) {
        if ($uname==$val['username']){
            $flag=false;
            $code=200;
        } else {
            $code=-1;
        }
    }   
};
echo $code;die;
//echo "<script>location.href='./../login/login.html';</script>";        

?>