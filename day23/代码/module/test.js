// 输入其他模块的内容
// import {name,sex,sayHi,getAge} from './module1.js';

// console.log(name);
// console.log(sex);

// sayHi();

// getAge()




// import {test1 as yoyo,test2,test3} from './module1.js';
// test1();
// yoyo();
// test2();
// test3();



// 输入模块的所有接口
// import * as obj from './module1.js';
// console.log(obj.name);
// obj.test1();



// import fun from './module1.js';
// import {name,sayHi} from './module1.js';
// import fun,{name,sayHi} from './module1.js';
// fun();
// sayHi();



// 变量值动态绑定
// import {num} from './module1.js';
// console.log( num );

// var box = document.querySelector('.box');
// box.onclick = function (){
//     console.log( num );
// }


import {ABC} from './module2.js';
console.log(ABC);


// console.log(this);//undefined
