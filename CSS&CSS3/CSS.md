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





