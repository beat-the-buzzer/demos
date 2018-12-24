### JavaScript精确加法

Javascript是一种神奇的语言，因为它可以完成不可思议的事情，也可以造成不可思议的问题。甚至，连小学数学都算不出来。

比较常见的面试题：

	0.1 + 0.7 == 0.8;
	0.1 + 0.2 == 0.3;
	2.01 + 0.01 == 2.02；

true or false?多么显然的问题，最后的结果却都是false。

造成这个问题的原因就是，用二进制来表示十进制浮点数会造成精度缺失，从而造成计算上的误差。

	function accAdd(arg1, arg2) {
	    var r1, r2, m;
	    try {
	        r1 = arg1.toString().split('.')[1].length;
	    } catch (e) {
	        r1 = 0;
	    }
	    try {
	        r2 = arg2.toString().split('.')[1].length;
	    } catch (e) {
	        r2 = 0;
	    }
	    m = Math.pow(10, Math.max(r1, r2));
	    //return (Math.round(arg1 * m) + Math.round(arg2 * m)) / m;
	    return (accMul(arg1,m) + accMul(arg2,m)) / m;
	}

	function accMul(arg1, arg2) {
	    var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
	    try {
	        m += s1.split(".")[1].length;
	    }
	    catch (e) {
	    }
	    try {
	        m += s2.split(".")[1].length;
	    }
	    catch (e) {
	    }
	    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
	}

	console.log('异常的情况：');
	console.log(0.1 + 0.2);
	console.log(2.01 + 0.01);
	
	console.log('调用精确相加：');
	console.log(accAdd(0.1,0.2));
	console.log(accAdd(2.01,0.01));
	
	console.log('为什么要在精确相加里面调用精确相乘？');
	console.log(2.01 * 100);
	console.log('因为乘法也不是精确的!');

据说，http://mathjs.org/ 可以解决这个问题，而且这个插件可以进行其他各种高级运算，包括虚数计算等。用不用这个插件，还是根据自己的喜好来吧。 https://github.com/josdejong/mathjs

