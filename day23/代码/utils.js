// 通过类名获取元素(全局)
function byClass1(classn){
    var allTag = document.all || document.getElementsByTagName('*');
    var arr = [];
    var reg = new RegExp('\\b'+classn+'\\b','g');
    for (var i = 0; i < allTag.length; i++){
        // if (allTag[i].className.indexOf(classn) != -1) {
        if (reg.test(allTag[i].className)) {
            arr.push(allTag[i]);
        }
    }
    return arr;
}

// 通过类名获取元素(局部)
function byClass2(parentId,classn){//
    var parent = document.getElementById(parentId);
    var allTag = parent.all || parent.getElementsByTagName('*');
    var arr = [];
    var reg = new RegExp('\\b'+classn+'\\b','g');
    for (var i = 0; i < allTag.length; i++){
        // if (allTag[i].className.indexOf(classn) != -1) {//
        if (reg.test(allTag[i].className)) {//allTag[i].className -> 'box1 box2 blue'
            arr.push(allTag[i]);
        }
    }
    return arr;
}

// 获取星期几
function getWeek(){
    var d = new Date();
    var num = d.getDay();//0-6
    var arr = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
    return arr[num];
}

// 生成范围随机数
function randomInt(min,max){
    return Math.round(Math.random()*(max-min))+min;
}

// 生成十六进制随机颜色
function randomColor(){
    var col = '#';
    var arr = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];//0-15
    for (var i = 0; i < 6; i++){
        var num = Math.round(Math.random()*15);//0-15
        col += arr[num];
    }
    return col;
}

// 生成6位随机验证码
function randomCode(){
    var arr = [1,1,1,1,1,1];//存储生成的随机字符
    for (var i in arr){
        do{
            var ascii = Math.round(Math.random()*(122-48))+48;// 48-122
        } while(ascii>57&&ascii<65 || ascii>90&&ascii<97);
        arr[i] = String.fromCharCode(ascii);
    }
    return arr.join('');// 返回的字符串
}

// 获取元素样式
function getStyle(dom,style){
    if (dom.currentStyle) {//IE
        return dom.currentStyle[style];
    } else {
        return getComputedStyle(dom,null)[style];
    }
}

// 添加事件监听
function addEvent(dom,type,fn){
    if (dom.attachEvent) {//IE
        dom.attachEvent('on'+type,fn);
    } else {
        dom.addEventListener(type,fn,false);
    }
}

// 获取元素到body左侧或顶部的距离（包含父级边框）
function offset(dom){
    var l = 0;
    var t = 0;
    var bdl = dom.clientLeft;//元素左边框宽度
    var bdt = dom.clientTop;//元素上边框宽度
    while(dom){
        l = l + dom.offsetLeft + dom.clientLeft;
        t = t + dom.offsetTop + dom.clientTop;
        dom = dom.offsetParent;//指向最近的定位父级
    }
    return {left: l - bdl, top: t - bdt};
}

// 缓冲运动
function bufferMove(dom,target,callback){
    dom.timer = null;
    clearInterval(dom.timer);
    dom.timer = setInterval(function (){
        // x轴运动
        var speedX = (target.left - dom.offsetLeft) / 10;//持续变化的速度
        speedX = speedX > 0 ? Math.ceil(speedX) : Math.floor(speedX);//对速度取整，避免数据丢失
        // 剩余的运动量 < 每次所走的运动量
        if (Math.abs(dom.offsetLeft - target.left) <= Math.abs(speedX)) {
            // clearInterval(dom.timer);
            dom.style.left = target.left + 'px';//设置终点
        } else {
            dom.style.left = dom.offsetLeft + speedX + 'px';
        }

        // y轴运动
        var speedY = (target.top - dom.offsetTop) / 10;//持续变化的速度
        speedY = speedY > 0 ? Math.ceil(speedY) : Math.floor(speedY);//对速度取整，避免数据丢失
        // 剩余的运动量 < 每次所走的运动量
        if (Math.abs(dom.offsetTop - target.top) <= Math.abs(speedY)) {
            clearInterval(dom.timer);
            dom.style.top = target.top + 'px';//设置终点
            callback();//回调函数
        } else {
            dom.style.top = dom.offsetTop + speedY + 'px';
        }
    },20);
}

// 获取元素
function $1(selector) {
    return document.querySelector(selector);
}
function $2(selector) {
    return document.querySelectorAll(selector);
}

// ajax封装
function ajax(obj){
    // 1.创建XMLHttpRequest对象(买手机)
    if (window.XMLHttpRequest) {
        var xhr = new XMLHttpRequest();//非IE5 6
    } else {
        var xhr = new ActiveXObject(Microsoft.XMLHTTP);//IE5 6
    }
    // data: 'user=xiaocuo&age=23'
    if (obj.type == 'get' || obj.type == 'GET') {
        // 2.打开与服务器的连接(拨号)
        xhr.open('get',obj.url+'?'+obj.data+'&_='+new Date().getTime(),true);
        // 3.发送到服务器(按下拨号键)
        xhr.send(null);
    } else if (obj.type == 'post' || obj.type == 'POST'){
        // 2.打开与服务器的连接(拨号)
        xhr.open('post',obj.url,true);
        // 先设置请求头，模拟表单form的post方式提交数据
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        // 3.发送到服务器(按下拨号键)
        xhr.send(obj.data);
    } else {
        alert('亲，目前只支持get和post请求方式');
        return;
    }
    // 4.等待服务器的响应(有可能关机，不在服务区，无人接听，有人接听)
    xhr.onreadystatechange = function (){
        if (xhr.readyState == 4) {//请求已完成
            if (xhr.status == 200) {//OK 请求成功
                obj.succeed(xhr.responseText);//成功的回调函数
            } else {
                obj.failed(xhr.status);//失败的回调函数
            }
        }
    }
}

// 设置cookie
function setCookie(key,value,day){
    if (day) {
        var d = new Date();
        d.setDate(d.getDate()+day);
        document.cookie = key + '=' + escape(value) + '; expires='+d;
    } else {
        document.cookie = key + '=' + escape(value);
    }
}

// 获取cookie
function getCookie(key){
    var arr1 = document.cookie.split('; ');
    for (var i = 0; i < arr1.length; i++){
        var arr2 = arr1[i].split('=');//["user1","xiaowang"]
        if (arr2[0] === key) {
            return unescape(arr2[1]);
        }
    }
    return null;
}

// 删除cookie
function removeCookie(key){
    setCookie(key,'123',-10);
}

