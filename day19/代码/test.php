<?php

$user = $_GET['user'];
// $user = $_POST['user'];
if ($user == 'xiaocuo'){
    echo '{"err":"false","name":"xiaocuo","age":"27","sex":"男"}';
} else {
    echo '{"err":"true","msg":"用户名错误"}';
}


?>