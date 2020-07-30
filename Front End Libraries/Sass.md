### Introduction to the Sass
Sass或“语法上很棒的StyleSheets”是CSS的语言扩展。它添加了使用基本CSS语法不可用的功能。 Sass使开发人员更容易简化和维护其项目的样式表。

Sass可以扩展CSS语言，因为它是预处理器。它采用Sass语法编写代码，并将其转换为基本CSS。这使您可以创建变量，将CSS规则嵌套到其他规则中，以及导入其他Sass文件等。结果是更紧凑，更易于阅读代码。

Sass有两种语法。第一个被称为SCSS（Sassy CSS），并在所有这些挑战中使用，它是CSS语法的扩展。这意味着每个有效的CSS样式表都是具有相同含义的有效SCSS文件。使用此语法的文件扩展名为.scss。

第二种或更旧的语法称为缩进语法（有时也称为“ Sass”），它使用缩进而不是方括号来表示选择器的嵌套，并使用换行符而不是分号来分隔属性。使用此语法的文件扩展名为.sass。

**使用Sass变量存储数据**
Sass与CSS的不同之处之一是它使用变量。 声明它们并设置为存储数据，类似于JavaScript。

在JavaScript中，变量是使用let和const关键字定义的。 在Sass中，变量以$开头，后跟变量名称。

这是几个例子：
```
$main-fonts: Arial, sans-serif;
$headings-color: green;

//To use variables:
h1 {
  font-family: $main-fonts;
  color: $headings-color;
}
```
变量有用的一个例子是，当多个元素需要使用相同的颜色时。 如果该颜色发生更改，只需要改变变量的值。

**Sass中的CSS嵌套**
Sass允许嵌套CSS规则，这是组织样式表的一种有用方法。

通常，每个元素都指向不同的行以对其进行样式设置，如下所示：
```
nav {
  background-color: red;
}

nav ul {
  list-style: none;
}

nav ul li {
  display: inline-block;
}
```
对于大型项目，CSS文件将具有许多行和规则。 在这里，嵌套可以通过将子样式规则放置在各自的父元素中来帮助组织代码：
```
nav {
  background-color: red;

  ul {
    list-style: none;

    li {
      display: inline-block;
    }
  }
}
```
**使用Mixins创建可重用的CSS**
在Sass中，mixin是一组CSS声明，可以在整个样式表中重复使用。

较新的CSS功能需要一段时间才能被完全采用并准备在所有浏览器中使用。将功能添加到浏览器后，使用这些功能的CSS规则可能需要供应商前缀。考虑“盒子阴影”：
```
div {
  -webkit-box-shadow: 0px 0px 4px #fff;
  -moz-box-shadow: 0px 0px 4px #fff;
  -ms-box-shadow: 0px 0px 4px #fff;
  box-shadow: 0px 0px 4px #fff;
}
```
要为具有框阴影的所有元素重新编写此规则，或者更改每个值以测试不同的效果，需要进行大量键入。 Mixins就像CSS的功能。这是写一个的方法：
```
@mixin box-shadow($x, $y, $blur, $c){ 
  -webkit-box-shadow: $x $y $blur $c;
  -moz-box-shadow: $x $y $blur $c;
  -ms-box-shadow: $x $y $blur $c;
  box-shadow: $x $y $blur $c;
}
```
**以@mixin定义**，后跟自定义名称。参数（上例中的$ x，$ y，$ blur和$ c）是可选的。现在，无论何时需要框阴影规则，只需调用mixin的一行就可以替换，而不必键入所有供应商前缀。**使用@include指令调用**mixin：
```
div {
  @include box-shadow（0px，0px，4px，#fff）;
}
```
**使用@if和@else为样式添加逻辑**
Sass中的@if指令对于测试特定情况非常有用-它的工作方式类似于JavaScript中的if语句。
```
@mixin make-bold($bool) {
  @if $bool == true {
    font-weight: bold;
  }
}
```
就像在JavaScript中一样，@ else if和@else测试更多条件：
```
@mixin text-effect($val) {
  @if $val == danger {
    color: red;
  }
  @else if $val == alert {
    color: yellow;
  }
  @else if $val == success {
    color: green;
  }
  @else {
    color: black;
  }
}
```
**使用@for创建一个Sass循环**
@for指令在循环中添加样式，与JavaScript中的for循环非常相似。

@for有两种使用方式：from 1 through 5”或“from 1  to 5”。 主要区别在于through包括最后一个，而to不包含最后一个

这是一个start through end的示例：
```
@for $i from 1 through 12 {
  .col-#{$i} { width: 100%/12 * $i; }
}
```
＃{$i}部分是将变量（i）与文本组合在一起以构成字符串的语法。 当Sass文件转换为CSS时，如下所示：
```
.col-1 {
  width: 8.33333%;
}

.col-2 {
  width: 16.66667%;
}

...

.col-12 {
  width: 100%;
}
```
这是创建网格布局的有力方法。 现在，您有十二个用于CSS类别的width选项。

**使用@each映射列表中的项目**
最后一个挑战显示了@for指令如何使用起始值和结束值循环一定次数。 Sass还提供@each指令，该指令遍历列表或映射中的每个项目。在每次迭代中，变量将从列表或映射中分配给当前值。
```
@each $color in blue, red, green {
  .#{$color}-text {color: $color;}
}
```
映射的语法略有不同。这是一个例子：
```
$colors: (color1: blue, color2: red, color3: green);

@each $key, $color in $colors {
  .#{$color}-text {color: $color;}
}
```
请注意，需要$ key变量来引用映射中的键。否则，编译后的CSS将包含color1，color2...。上面的两个代码示例都转换为以下CSS：
```
.blue-text {
  color: blue;
}

.red-text {
  color: red;
}

.green-text {
  color: green;
}
```

**应用样式，直到使用@while满足条件**
@while指令是一个功能与JavaScript while循环类似的选项。 它创建CSS规则，直到满足条件为止。

@for挑战给出了创建简单网格系统的示例。 这也可以与@while一起使用。
```
$x: 1;
@while $x < 13 {
  .col-#{$x} { width: 100%/12 * $x;}
  $x: $x + 1;
}
```
首先，定义变量$ x并将其设置为1。接下来，使用@while指令在$ x小于13时创建网格系统。设置CSS宽度规则后，$x递增1以避免无限循环。

**使用_文件名保存.scss文件，并通过@import "文件名"导入**

Sass中的部分文件是保存CSS代码段的单独文件。 这些已导入并在其他Sass文件中使用。 这是将相似代码分组到一个模块中以保持其组织的好方法。

局部名称以下划线（_）开头，该字符告诉Sass这是CSS的一小部分，而不是将其转换为CSS文件。 此外，Sass文件以.scss文件扩展名结尾。 要将部分代码导入另一个Sass文件，请使用@import指令。

例如，如果您所有的混合文件都保存在名为“ _mixins.scss”的部分中，并且在“ main.scss”文件中需要它们，这是在主文件中使用它们的方法：
```
//在main.scss文件中

@import 'mixins'
```
请注意，导入语句中不需要下划线和文件扩展名-Sass理解这是部分的。 将部分文件导入文件后，所有变量，mixin和其他代码都可以使用。

**将一组CSS样式扩展到另一个元素**
Sass具有一项称为extend的功能，可以轻松地从一个元素借用CSS规则，然后在另一个元素上进行构建。

例如，下面的CSS规则块为.panel类设置样式。 它具有背景色，高度和边框。
```
.panel{
  background-color: red;
  height: 70px;
  border: 2px solid green;
}
```
现在，您需要另一个名为.big-panel的面板。 它具有与.panel相同的基本属性，但还需要宽度和字体大小。 可以从.panel复制并粘贴初始CSS规则，但是随着添加更多类型的面板，代码变得重复。 扩展指令是一种简单的方法，可以重复使用为一个元素编写的规则，然后为另一个元素添加更多规则：
```
.big-panel{
  @extend .panel;
  width: 150px;
  font-size: 2em;
}
```
.big-panel除了具有新样式外，还将具有与.panel相同的属性。







