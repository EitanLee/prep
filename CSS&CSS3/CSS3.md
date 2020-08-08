# 选择器
**属性选择器**
element[attribute] 选中给定属性的标签
```
a[href] //带有href属性的a标签

a[href=“vlaue”] //选择href=“vlaue”的a标签

a[href~=“vlaue”] //选择href包含“vlaue”的所有a标签

a[href^=“vlaue”] //选择href以“vlaue”开头的所有a标签

a[href$=“vlaue”] //选择href以“vlaue”结尾的所有a标签

a[href|=“vlaue”] //选择href以“vlaue”或者“value-”开头的所有a标签
```
**伪类选择器**
动态伪类:当用户与页面交互的时候显示

锚点
:link,:visited

行为
:hover , :active ,:focus

---
元素状态伪类
:enabled 可输入的

:disabled 不可输入的

:checked  复选框选中的

---
结构类选择器

:first-child 第一个子元素

:last-child 最后一个子元素

:nth-child(n)  第n个子元素,不论元素的类型,n可以是2n,2n+1来匹配奇数或者偶数 也可以用odd,even代替

:nth-last-child(n)  倒数第n个子元素

:empty 没有子元素第节点,包括文本节点

:not  否定选择器 父元素:not(element/selector)

---
**CSS选择器权重**
行内样式>ID选择器>属性选择器和伪类选择器>元素和伪元素>通配符*

---
**伪元素**
CSS伪元素用于向某些选择器设置特殊效果

元素::伪元素

element::first-line  只能用于块级元素,对第一行文本进行设置

element::first-letter 设置第一个字

element::before  在元素内容前面插入内容,常配合content使用
特点:是element的第一个子元素,是一个行级元素,内容通过content写入
```
a::before{
    content:"我在内容前面";
}
```

element::after 在元素内容前面插入内容,常配合content使用,多用于清除浮动

.clearfix::after{
    content:"";
    display:block;
    clear:both
}

element::selection 用于设置页面中选中文本后的背景色与前景色

# 样式
圆角 boder-radius

<div style="width:200px;height:200px;border-radius:50%;color:red;border:2px solid green;line-height:200px;text-align:center">我是一个div的圆</div>

阴影 box-shadow


边框背景图 border-image属性

---
# 背景

backgroud-clip 指定背景的绘制区域

backgroud-origin 指定background-position的相对位置

backgroud-size 指定背景图片的大小

CSS3允许设置多个背景图像
backgroud-image:url(),url(),url()...

# 渐变
* 线性渐变(lineargradient)

    background:linear-gradient(direction方向,color-stop1,color-stop2,...)

方向:默认是从上到下, to end,不同浏览器语法不同

    background:linear-gradient(angle角度,color-stop1,color-stop2,...)

角度:0deg从下到上 180deg从上到下 45deg 左下到右上

* 重复线性渐变
background:repeat-linear-gradient(color-stop1,color-stop2,...)

* ⭕️径向渐变
background:radial-gradient(color1,color2,...)

* 重复径向渐变
background:repeat-radial-gradient(color1,color2,...)

---
* 一个小例子

            width: 400px;
            height: 400px;
            background: linear-gradient(45deg,red 25%,transparent 25%),
            linear-gradient(-45deg,red 25%,transparent 25%),
            linear-gradient(45deg,transparent 75%,red 25%),
            linear-gradient(-45deg,transparent 75%,red 25%);
            background-size: 100px 100px;
<div style="width: 400px;
            height: 400px;
            background: linear-gradient(45deg,red 25%,transparent 25%),
            linear-gradient(-45deg,red 25%,transparent 25%),
            linear-gradient(45deg,transparent 75%,red 25%),
            linear-gradient(-45deg,transparent 75%,red 25%);
            background-size: 100px 100px;"></div>

# 文本
text-shadow 文本阴影 

text-outline 文本轮廓

* 换行
word-break 规定自动换行的方法

word-wrap 允许单词或URL地址换行

# 字体
@font-face{
    font-family: 字体
    src: 字体存放路径
    font-weight: 粗细
    font-style: 样式
}
使用仍然是通过 font-family:字体名称

# 转换
* transform:rotate() 2d旋转
    2d旋转 transform:rotate(deg度数)



* transform:translate() 2d平移
    transform:translateX() 沿水平方向平移

    transform:translateY() 沿垂直方向平移

    transform:translate(x,y) x是水平方向,y是垂直方向

* transform: scale()   2d缩放

    transform: scaleX()   水平方向上往中间拉伸,缩小

    transform: scaleX()   垂直方向上往中间拉伸,缩小

    transform: scale(x,y) 等比例缩放
    
    transform: scale(-1,1) 对称翻转 


* tansform: skew()  斜切(比如从正方形拉成平行四边形)

    tansform: skewX() 

    tansform: skewY()

    tansform: skew() 

# 3D转换
**旋转**
transform:rotateX(45deg) 沿着x轴上的旋转
这个旋转就和人绕着单杠旋转一样

transform:rotateY(45deg) 沿着Y轴上的旋转
就像绕着木桩旋转的木马

transform:rotateZ(45deg) 沿着Z轴上的旋转
就像2d平面旋转一样

transform:rotate(x,y,z,deg) 前三个参数是方向,第4个参数是旋转的度数

**平移**
transform:translateZ() 沿着Z轴的平移

transform:translate3d(x,y,z) 

**缩放**
transform:scaleZ() 沿着Z轴的拉伸,缩放

transform:scale3d(x,y,z)

**坐标系统与基准点**
transform-origin(x,y,z) 设置转换的基准点

**矩阵**

# 过渡
transition 让css属性的值在一定时间内平滑过渡
        在鼠标单击、获得焦点...等元素改变时触发

transition-property: none|all所有属性改变|property给定属性改变

transition-duration 过渡的持续时间 默认值0

transition-time-function 设置过渡的时间函数(先慢后快等)

transition-delay 推迟开始过渡的时间

简写:
transition:要改变的属性 动画时间 动画方法 推迟动画执行的时间


