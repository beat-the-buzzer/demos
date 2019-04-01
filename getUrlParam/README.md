### 获取url后面带的参数

通过正则匹配，获取到参数，并且把参数放到数组里。

	function getUrlParam(url, key) { //定义函数
		if (!url) {
			url = window.location.href
		}
		var urlformat = url;
		var re = /[^?#&]+\=[^?#&]+/g;
		var paramsarr = urlformat.match(re) || [];
		var returnjson = {};
		paramsarr.forEach((data) => {
			var splitdata = data.split('=');
			var sp0 = splitdata && splitdata[0]
			var sp1 = splitdata && splitdata[1]
			if (sp0) {
				returnjson[sp0] = sp1
			}
		});
		if (key) {
			var returnpart = returnjson && returnjson[key] || '';
			return returnpart
		} else {
			return returnjson;
		}
	}

