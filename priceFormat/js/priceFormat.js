var num = 23333333333;
console.log(num.toLocaleString('en-US'));
console.log(num.toLocaleString());

//下面三种方法是不行的，因为toFixed最后的返回类型是string，就算强制或者隐式转成number，小数点后面如果是0的话，会被丢掉的
console.log('下面三种方法是不行的，因为toFixed最后的返回类型是string，就算强制或者隐式转成number，小数点后面如果是0的话，会被丢掉的');
console.log((num.toFixed(2).toLocaleString('en-US')));
console.log(((+(num.toFixed(2))).toLocaleString('en-US')));
console.log((Number(num.toFixed(2)).toLocaleString('en-US')));

//正则表达式的方式
console.log('正则表达式的方式');
var num = '23333333333.00';
var format = num.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
console.log(format);

//非正则的写法
console.log('非正则的写法');
function formatCash(str) {
    return str.split('').reverse().reduce((prev, next, index) => {
         return ((index % 3) ? next : (next + ',')) + prev
    })
 }
console.log(formatCash('1234567890'));

//综合写法
console.log('综合写法');
var num = 2333333333;
num = num.toFixed(2);
var arr = num.split('.');
arr[0] = (Number(arr[0])).toLocaleString('en-US');
console.log(arr.join('.'));


