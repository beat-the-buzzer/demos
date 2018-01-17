###价格格式化

价格格式化是一个常见的业务场景，一般有两种，一是保留两位小数，二是千分位分割。

1、先说保留两位小数，这个比较容易，一般我都用toFixed方法。

	var num = 2333333333;
	num.toFixed(2);

不过需要注意的是，使用这个方法得到的是一个字符串类型

2、千分位分割

这是一个比较常见的情况，网上方法有很多，本文主要讲的是以下两种方法：

	var num = 23333333333;
	console.log(num.toLocaleString('en-US'));
	console.log(num.toLocaleString());

这种方法看似可以轻松解决问题，但是掩盖了其他可能存在的问题。比如，如何在保留两位小数的情况下去分割。

	console.log((num.toFixed(2).toLocaleString('en-US')));

这种方法的问题就是：num.toFixed(2)是字符串类型，只有number类型的toLocaleString方法才能有效分割。

我们很容易想到的是，强制或者隐式转成number类型，但事实上，还是不可以：

	console.log(((+(num.toFixed(2))).toLocaleString('en-US')));
	console.log((Number(num.toFixed(2)).toLocaleString('en-US')));

除非使用一种方法得到23333333333.00这样一个数字类型，才能直接使用toLocaleString方法。或者，在得到2,333,333,333这个字符串之后，在它的后面补小数点和0。不管怎么样，都需要额外的操作。

另一种方法是正则表达式：
	
	var num = '23333333333.00';
	var format = num.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
	format

虽然原理很难弄清楚，但是效果还是不错的。

另外还有一种非正则写法：

	function formatCash(str) {
       return str.split('').reverse().reduce((prev, next, index) => {
            return ((index % 3) ? next : (next + ',')) + prev
       })
	}
	console.log(formatCash('1234567890')) // 1,234,567,890
	
这只是整数部分的处理，这种方式可以让我们找到一个新的思路:整数部分和小数部分分开处理。

综合一下：

	var num = 2333333333;
	num = num.toFixed(2);
	var arr = num.split('.');
	arr[0] = (Number(arr[0])).toLocaleString('en-US');
	console.log(arr.join('.'));
	
