importScripts('ajax.js');
onmessage = function (event){
    // console.log(event);
    // console.log(event.data);//主线程发过来的消息
    if (event.data == '干活了') {
        var num = 0;
        for (var i = 0; i < 2000000000; i++){
            num+=i;
        }
        // console.log(num);
        postMessage(num);//把计算结果返回给主线程
    }

    if (event.data == 'abc1001') {
        ajax({
            url: 'datas.php',
            type: 'get',
            data: 'userid=' + event.data,
            succeed: function (jsonStr){
                postMessage(jsonStr);
                close();// 用于在 Worker 内部关闭自身
            }
        });
    }
}

// self.onmessage = function (){
    
// }

// this.onmessage = function (){
    
// }