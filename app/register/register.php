<?php
header('Access-Control-Allow-Origin:*');
$conn=mysqli_connect('127.0.0.1','root','','sony');
mysqli_query($conn,"set names utf8");
$username=$_GET['username'];
$mail=$_GET['mail'];
$tel=$_GET['tel'];
$pwd=$_GET['password'];
$sql = "insert into user (username,password,mail,tel) values ('$username','$pwd','$mail','$tel')";
mysqli_query($conn,$sql);
$row=mysqli_affected_rows($conn);
if($row){
   echo "<script>window.location.href='./../login/login.html'</script>";
} else {
    echo "<script>alert('注册失败！请重新注册');window.location.href='./register.html'</script>";
}
?>

