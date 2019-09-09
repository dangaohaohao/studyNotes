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

function getWeek(){
    var d = new Date();
    var num = d.getDay();//0-6
    var arr = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
    return arr[num];
}

function randomInt(min,max){
    return Math.round(Math.random()*(max-min))+min;
}

function randomColor(){
    var col = '#';
    var arr = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];//0-15
    for (var i = 0; i < 6; i++){
        var num = Math.round(Math.random()*15);//0-15
        col += arr[num];
    }
    return col;
}

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

function getStyle(dom,style){
    if (dom.currentStyle) {//IE
        return dom.currentStyle[style];
    } else {
        return getComputedStyle(dom,null)[style];
    }
}

function addEvent(dom,type,fn){
    if (dom.attachEvent) {//IE
        dom.attachEvent('on'+type,fn);
    } else {
        dom.addEventListener(type,fn,false);
    }
}
