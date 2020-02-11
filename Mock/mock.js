/*jshint esversion: 6 */
// let Mock = require('mockjs');
// let data = Mock.mock({
//     'list|1-20':[{
//         'id|+1':1,//随机生成ID
//         '姓名' : '@cname',//随机生成中文姓名
//         '年龄' : '@integer(1,100)',//随机生成年龄范围1-100
//         '电子邮箱' : "@email",//随机生成邮箱
//         '日期' : '@datetime',//随机生成日期
//         '英文诗' : "@sentence(10,10)",//随机生成 英文
//         '户口所在地' : '@city(true)',//随机生成省市
//         '所在地' : '@county(prefix)',//随机生成省市县
//         '编号' : '@zip',//随机生成编号
//         '身份证号码' : '@ID',//随机生成身份证号码
//         '颜色' : '@color',//随机生成身份证号
//         'url' : '@url',//随机生成URL地址
//         'img' : '@img'//随机生成图片地址
//     }],
// });

// console.log(JSON.stringify(data,null,4));
// let a = 10;
// let b = 20;
// let c = 10;
// if ( a > b) {
//     console.log('a>b');
// }else{
//     console.log('a<b')
// },
// if ( a > b) {
//     console.log('a>b');
// } else if(a = c){
//     console.log('a = c');
// };

// let num = 20
// switch (num) {
//     case 30:
//     console.log("this is num value")
//         break;
//     case 220:
//     console.log('this is case 2');
//     default://默认没有符合的语句 执行如下语句
//     console.log('没有符合的要求')
//         break;
// // }
// var miss = 'bmw';
// var miss ;
// console.log(miss);//bmw
// let m = k = j = 10;
// console.log(m,k,j);
// var a,b =10;
// console.log(a +'10');//undefined10
// console.log(a + 10);//NAN
// console.log(b + 10)//20
// console.log(b + '10')//1010

// var x,y = 100;
// console.log(x && ++y);
// console.log(x,y);
// console.log(x || y++);
// console.log(x,y);
// console.log(y);
// let a = 10;
// let b = 11;
// let c = 12;
// if ( a > b ) {
//     if ( a > c) {
//         console.log(a)
//     }
// }else if( b > c  ){
//     console.log( b );
// }else{
//     console.log(c);
// }
// let max = a > b ? a : b > c ? b : c ;//两次三元预算
// console.log(max);
// let str1 = '55';
// console.log( typeof(str1++));
// console.log(typeof((Number(str1))));
// console.log(typeof(parseInt(str1)));
// let num = 20;
// if (num == 100) {
//     console.log('A+')
// }else if ( 90 <= num && num < 100){
//     console.log("A")
// }else if ( 80 <= num && num < 90){
//     console.log("B")
// }else if ( 70 <= num && num < 80){
//     console.log("C")
// }else if ( 60 <= num && num < 70){
//     console.log("D")
// }else if ( 0 <= num && num < 60){
//     console.log("你的分数为非法的")
// }else {
//     console.log('E');
// }
// let num2 = 100;
// switch (num2) {
//     case 80:
//     //代码块
//         break;
//     case 90:
//     //代码块
//         break;
//     case 100:
//         console.log('this is about taolu ');
//         break;
//     default: //都不满足执行语句
//         break;
// };
// let num3 = parseInt(prompt('Nuber'));//promt 不能再NODE执行
// switch (num3) {
//     case 80:
//     case 90:
//     case 100:
//     console.log('100');
//         break;

//     default:
//         console.log('没有符合的语句');
//         break;
// };
//swich 中一旦和case匹配，就会顺序执行后面的代码，
//而不管后面的case是否匹配，知道遇见break
//switch语句中每个case的匹配实际操作是‘===’
//全等运算符进行比较因此表达式和case不会进行任何类型转换
//在web开发过程中任何文本框和输入框输入的内容 ，
//获取的都是string类型
//以下是switch 开发套路
// let num4 = 120;
// switch (true) {
//     case num4 >= 100:
//         console.log(num4)
//         break;
//     case num4 <= 100:
//         console.log(num4)
//         break;
//     case num4 >= 100:
//         console.log(num4)
//         break;
//     default:
//         break;
// };
// let boo1 = true;
// let tried = 0;
// while (boo1 && tried < 200) {//循环200次 此停止
//     console.log("thsi is about while 循环");
//     tried ++;
//     //如果条件一直成立将会一直循环 直到条件不成立为止
// };
//let sun = 0;
// let i = 1;
// while (i <= 100) {
//     sun += i;
//     i++;

// }
// console.log(sun);
// console.log(i);
// let sum = 0;
// let z = 1;
// do {
//     sum =+ z;
//     z++;
// } while (z<100);
// console.log(sum);
// let arr = [1,2,3,4,5,6,7,8,9,10]
// let sum1 = 0;
// for (let index = 0; index <
//  100; index++) {
//      sum1 += index +1;

// }
// console.log(sum1);

// let num1 = 10;
// if (num1 > 0) {
//     let sum = 0
//     for (let index = 0; index < num1; ) {
//         sum += index +1;
//         index++;
//      }
//     console.log(sum);
// }else{
//     console.log("结果不是想要的");
// }

//输入1
// let sum = 0
// for (let index = 0; index <= 100; index++) {
//     if  (index %3 == 0) {
//         console.log(index)
//         sum += index ;
//     }

// }
// console.log(sum);
// var r = 10;
// for (var j = 1; j <= r; j++) {
//     var sum = '';
//     for (let i = 1; i < j; i++) {
//         sum += i;
//     }
//     console.log(sum);
// }
//嵌套循环
// var distane = 0;
// var person = 1;
// for (; person <= 5; person ++) {
//     var loop = 1;
//     for (; loop <= 5; loop++) {
//         console.log('第' + person + "在跑第" + loop + '圈')
//         distane += 200;//这是个累加的过程
//     }
// }
// console.log('总共跑了' + distane);
// for (let index = 1; index < 100; index++) {
//     if (index %3 == 0 && index %5 == 0) {
//         console.log(index);
//         break;
//     };
// };
// let sum = 0;
// for (let index = 0; index <= 100; index++) {
//     if ( index %3 !== 0 && index %5 !== 0 ) {
//         //console.log(index);
//     }else{

//     }
// }
// let arr = [1,3,5,7,9,2,6,4,8,9];
// arr.sort(function () {
//     return Math.random() - 0.5;
// })
// console.log(arr);
//demo
// let row = 5;
// for (let index = 1; index <= row; index++) {
//     let s = ''
//     for (let j = 1; j <= index ; j++) {
//         s += "*";
//     };
//     console.log(s);
// };
// let row = 6;
// for (let i = 1; i <= row; i++) {
//     let s = ''
//     for (let j = 1; j <= row - i + 1 ; j++) {
//         s += "*";
//     };
//     console.log(s);
// };
// let num = 6;
// for (let index = 1; index <= num; index++) {
//     let obj = '';//定义初始值
//     for (let i = 1; i <= num - index; i++) {//拿到空格
//         obj += " ";
//     };
//     for (let k = 1; k <=  2 * index - 1; k++) {
//         obj += "*"//相加‘*’
//     }
//     console.log(obj);
// }
//判断瑞年
// for (let index = 1000; index <= 2016; index++) {
//     if ( index % 400 == 0 || index %4 == 0 && index %100 !== 0) {
//         console.log(index);
//     }
// }

//找出所有的水仙花数
// for (let index = 100; index <= 999; index++) {
//     let gw = index % 10;//拿到个位数
//     let sw = parseInt(index % 100 / 10);//拿到十分位
//     let bw = parseInt(index / 100);//拿到百分位
//     if (index ==  (gw * gw  * gw)  +  (sw * sw * sw)  +  bw * bw * bw ) {
//         console.log(index);//打印结果
//     }
// };

let Mock = require("mockjs");
let data = Mock.mock({
  "list|5": [
    {
      "id|+1": 1, //随机生成ID
      name: "@cname", //随机生成中文姓名
      age: "@integer(1,100)", //随机生成年龄范围1-100
      email: "@email", //随机生成邮箱
      date: "@datetime", //随机生成日期
      english: "@sentence(10,10)", //随机生成 英文
      city: "@city(true)", //随机生成省市
      county: "@county(prefix)", //随机生成省市县
      zip: "@zip", //随机生成编号
      iD: "@ID", //随机生成身份证号码
      color: "@color", //随机生成身份证号
      url: "@url", //随机生成URL地址
      img: "@img", //随机生成图片地址
    },
  ],
});
// console.log(JSON.stringify(data,null,5));//即解析出来第一个是数据，第二个是空 第三个空格
// console.log(data);
let {
  list: [{ id, name, email, iD, date, county, english, city, zip, url, img }],
} = data;
console.log(id, name, email, iD, date, county, english, city, zip, url, img);
