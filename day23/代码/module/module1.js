var a = 1;
var b = 2;
var n = 123;

// 错误
// export a;
// export a,b,c;


// export var name = 'xiaoming';
// export var age = 25;

// var sex = '女';
// export {sex};

// export function sayHi(){
//     alert('大家好');
// }

// function getAge(){
//     alert(age);
// }
// export {getAge};




var name = 'xiaoming';
var age = 25;

var sex = '女';

function sayHi(){
    alert('大家好');
}

function getAge(){
    alert(age);
}

var obj1 = {a:11,b:22,c:33};

export {name,age,sex,sayHi,getAge,obj1};


function fn1(){
    alert('函数fn1执行');
}
function fn2(){
    alert('函数fn2执行');
}
function fn3(n){
    alert(n);
}

export {
    fn1 as test1,
    fn2 as test2,
    fn2 as test3,
    fn3,
}


var num = 5;
setTimeout(function (){
    num = 8;
},3000);
export {num};


// export default obj1;

// export default var abc = 123;//错误

// var abc = 123;
// export default abc;


// export default var fun2 = function (){};

export default function fun(){
    alert('fun zhix');
}
