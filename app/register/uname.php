<?php
header('Access-Control-Allow-Origin:*');
$conn=mysqli_connect('127.0.0.1','root','','sony');
mysqli_query($conn,"set names utf8");
$username=$_GET['username'];
$sql = "select * from user where username = '$username' ";
mysqli_query($conn,$sql);
$row=mysqli_affected_rows($conn);
if($row>0){
    $responseData=1;
} else {
    $responseData=-1;
}

echo $responseData;
?>
