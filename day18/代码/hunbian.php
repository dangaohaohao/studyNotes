<?php
$tit = 'php混编';
$con = '来自php的内容';
$color = 'red';

?>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?php echo $tit ?></title>
</head>
<body>
    <h1 style="color:<?php echo $color ?>;"><?php echo $con ?></h1>
    <form action="https://www.baidu.com/">
        账号：<input type="text"><br>
        密码：<input type="text"><br>
        <input type="submit" value="提交">
    </form>
    <script>
        var h1 = document.querySelector('h1');
        h1.onclick = function (){
            alert('别摸我');
        }
    </script>
</body>
</html>
