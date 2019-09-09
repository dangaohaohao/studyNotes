<?php
// 设置响应头
header('Content-type:text/html;charset=utf8');

// $username = $_GET['user'];// 账号
// $userpass = $_GET['pass'];// 密码

$username = $_POST['user'];// 账号
$userpass = $_POST['pass'];// 密码

if ($username == 'xiaocuo' && $userpass == '123456'){
    echo '登录成功！';
} else {
    if ($username != 'xiaocuo'){
        echo '账号错误';
        die();
    }
    if ($userpass != '123456'){
        echo '密码错误';
    }
}


?>