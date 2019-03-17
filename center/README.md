### DIV居中的几种实现

> 这里讲的所有居中实现，都是子元素相对于父元素水平居中和垂直居中。

	<div class="outer">
	    <div class="inner"></div>
	  </div>

1、flex布局

这个在之前就有一定的总结，[https://github.com/beat-the-buzzer/flex](https://github.com/beat-the-buzzer/flex)

	.outer {
	  width: 200px;
	  height: 200px;
	  background: #EE6911;
	  display: flex;  
	  justify-content: center;  
	  align-items: center;  
	}
	.inner {
	  width: 50px;
	  height: 50px;
	  background: #CCCC33;
	}

2、transform位移50%

	.outer {
	  width: 200px;
	  height: 200px;
	  background: #EE6911;
	  position: relative;
	}
	.inner {
	  width: 50px;
	  height: 50px;
	  background: #CCCC33;
	  position: absolute;
	  top: 50%;
	  left: 50%;
	  transform: translate(-50%,-50%);
	}

去除transform，此时子元素的左上角位于父元素的正中间。transform的意义在于将子元素向左向上位移自身的50%，从而达到居中效果。

3、margin: auto配合绝对定位
	
	.outer {
	  width: 200px;
	  height: 200px;
	  background: #EE6911;
	  position: relative;
	}
	.inner {
	  width: 50px;
	  height: 50px;
	  background: #CCCC33;
	  position: absolute;
	  top: 0;
	  left: 0;
	  right: 0;
	  bottom: 0;
	  margin: auto;
	}

演示效果：

![https://raw.githubusercontent.com/beat-the-buzzer/pictures/master/demos/center/1.png](https://raw.githubusercontent.com/beat-the-buzzer/pictures/master/demos/center/1.png)