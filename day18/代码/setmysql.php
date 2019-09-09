<?php
// 设置响应头
header('Content-type:text/html;charset=utf8');

// 关闭警告
error_reporting(0);

$phone = $_GET['phone'];


// 链接数据库
$link = mysql_connect('','root','') or die('链接失败!');
if ($link){
    echo '链接成功！';
}

// 设置编码
mysql_query('set names utf8');

// 选择数据库
mysql_query('use gp1');

// 执行sql语句
$sql = "select * from user where phone='{$phone}'";
$result = mysql_query($sql);//查询的结果集

// var_dump($result);//resource(4, mysql result)

// 获取受影响条数
$num = mysql_affected_rows();

if ($num > 0){
    $rows = [];
    while($row = mysql_fetch_assoc($result)){
        $rows[] = $row;
    }
    echo '<pre>';
    print_r($rows);//二维数组

    // echo '<br>';
    // echo json_encode($rows,JSON_UNESCAPED_UNICODE);//把数组转成json字符串 返回
} else{
    echo '<p>暂无数据！</p>';
}




?>