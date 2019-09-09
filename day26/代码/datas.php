<?php
	$id = $_GET['userid'];
	switch ($id) {
		case 'abc1001':
			echo '{"name":"张小明","sex":"男","age":"25","id":"abc1002"}';
			break;
		case 'abc1002':
			echo '{"idcode":"400123199710205566","phone":"13577778888", "id":"abc1003"}';
			break;
		case 'abc1003':
			echo '{"address":"广东省深圳市宝安区发财路1818号"}';
			break;
		default:
			echo '{"err":"true","msg":"参数错误"}';
	}
?>