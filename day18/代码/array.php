<?php

// 设置响应头
header('Content-type:text/html;charset=utf8');


// 索引数组
// $arr1 = [];
// $arr1[0] = 'aa';
// $arr1[1] = 'bb';
// $arr1[2] = 123;
// $arr1[3] = 'dd';
// $arr1[4] = '你好';

// echo '<pre>';
// print_r($arr1);
// var_dump($arr1);


// $arr2[1] = 'aa';
// $arr2[3] = 'bb';
// $arr2[5] = 123;
// $arr2[7] = 'dd';
// $arr2[9] = '你好';
// echo '<pre>';
// print_r($arr2);


// $arr3 = array('a','b','c','d');
// echo '<pre>';
// print_r($arr3);


// 关联数组
// $arr4 = [];
// $arr4['one'] = '1111';
// $arr4['two'] = '2222';
// $arr4['three'] = '3333';

// echo '<pre>';
// print_r($arr4);

$arr5 = array(
    'a1' => 'php',
    'a2' => 'css',
    'a3' => 'javascript'
);
// echo '<pre>';
// print_r($arr5);

// foreach($arr5 as $k => $v){
//     // echo "key是：$k, value是：$v <br>";
//     if ($v == 'css'){
//         echo "key是：$k, value是：$v <br>";
//     }
// }


$arr6 = [];
$arr6[] = $arr5;
echo '<pre>';
print_r($arr6);// 二维数组


?>