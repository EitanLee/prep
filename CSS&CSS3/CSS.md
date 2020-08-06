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

<div style="width:200px;height:200px;border-radius:50%;color:red;border:2px solid red;line-height:200px;text-align:center">我是一个div的圆<div>

阴影 box-shadow


边框背景图 border-image属性


