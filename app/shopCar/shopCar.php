<?php

$id = $_GET['id'];
$json_string = file_get_contents("text.json");// 从文件中读取数据到PHP变量
$data = json_decode($json_string,true);// 把JSON字符串转成PHP数组
$arrlength=count($data);
$flag = false;
for ($x=0;$x<$arrlength;$x++) {
    if ($data[$x]['id'] == $id) {
        $active = $_GET['active'];
        if ($active == 'add') {
            $data[$x]['num'] ++;
        } else if ($active == 'cut') {
            $data[$x]['num'] --;
        } else if ($active == 'del') {
            unset($data[$x]);
        } else if ($active == 'change') {
            $newNum = $_GET['num'];
            $data[$x]['num'] = $newNum;
        }
        $flag = true;
    } 
}
if ($flag) {
    $name = $_GET['name'];
    $price = $_GET['price'];
    $data[]=array("id"=>$id,"name"=>$name,"price"=>$price);
}
$json_strings = json_encode($data);
file_put_contents("text.json",$json_strings);//写入

?>