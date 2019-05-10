<?php
header('Access-Control-Allow-Origin:*');
$conn=mysqli_connect('127.0.0.1','root','','sony');
mysqli_query($conn,"set names utf8");
$username=$_GET['uname'];
$password=$_GET['pwd'];
$sql = "select * from user where username = '$username' and password ='$password'";
mysqli_query($conn,$sql);
$row=mysqli_affected_rows($conn);
if($row>0){
    echo 1;
} else {
    echo -1;
}
;
?>
