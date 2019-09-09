<?php
// 设置响应头
header('Content-type:text/html;charset=utf8');


// echo 'hello world';
// echo '<br>';
// die('程序执行结束');
// echo '<p>这是一个p标签</p>';


$a = 123;
$b = 'hello';
$c = 'world';

// echo $a,$b;
// print $a;

// echo 'hello $c';
// echo '<br>';
// echo "hello $c";
// echo $b.' '.$c;//字符串拼接用.
// ECHO $b.' '.$c;//字符串拼接用.

$html = <<<str
    <form action="https://www.baidu.com/">
        账号：<input type="text"><br>
        密码：<input type="text"><br>
        <input type="submit" value="提交">
    </form>
str;
//结束的标识符str必须顶格写
// echo $html;


// $d = 888;
// function test(){
//     $e = 999;
//     global $d;
//     echo "函数内部访问1：$d";
//     echo '<br>';
//     echo "函数内部访问2：$e";
// }
// test();
// echo '<br>';
// echo "函数外部访问3：$d";
// echo '<br>';
// echo "函数外部访问4：$e";


// 超全局变量 $_GET $_POST



?>
