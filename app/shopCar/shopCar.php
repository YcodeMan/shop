<?php

$id = $_GET['id'];
$json_string = file_get_contents("shopCar.json");// 从文件中读取数据到PHP变量
$data = json_decode($json_string,true);// 把JSON字符串转成PHP数组
$arrlength=count($data);
$flag = false;
if ($arrlength) {
    for ($x=0;$x<$arrlength;$x++) {
        if ($data[$x]['id'] == $id) {
            $active = $_GET['active'];
            if ($active == 'cut') {
                $data[$x]['num'] --;
            } else if ($active == 'del') {
                unset($data[$x]);
            } else if ($active == 'change') {
                $newNum = $_GET['num'];
                $data[$x]['num'] = $newNum;
            } else {
                $data[$x]['num'] ++;
            }
            $flag = true;
        } 
    }
}
if (!$flag && $id) {
    $img = $_GET['img'];
    $name = $_GET['name'];
    $price = $_GET['price'];
    $data[]=array("id"=>$id,"img"=>$img,"name"=>$name,"price"=>$price,"num"=>1);
}
$json_strings = json_encode($data,JSON_UNESCAPED_SLASHES);
$bool = file_put_contents("shopCar.json",$json_strings);//写入
if ($bool) {
    $res = ['code' => '200', 'message' => '加入购物车成功'];
} else {
    $res = ['code' => '-1', 'message' => '加入购物车失败'];
}
echo json_encode($res);
?>