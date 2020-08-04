# 函数
## parameter &  argument 
实参数量多于形参
实参以函数形参指定的顺序赋值给形参,如果额外多传了,不会赋值给任何形参
实参数量少于形参
那么没有对应实参的形参会被设为undefined

## 默认参数

ES6之前处理默认参数的方式
```
function perform(ninjia,action){
    action = typeof action === "undefined" ? "skulking" : action;
    //如果参数action是undefined,就用默认参数skulking,如果传入了参数,就用传入的参数.
    return ninjia+" "+action;
}
perform("Fuma") //Fuma skulking
perform("Yoshi","sneaking")//Yoshi sneaking
```
ES6支持默认参数的方式
```
function perform(ninjia,action="skulking"){
    //给形参一个默认的参数skulking,当action没有对应的实参的时候,就使用它
    return ninjia+" "+action;
}
```
## 剩余参数rest parameters

...parameters,是一个数组,包含传入的剩余的参数
*只有最后一个参数才能是剩余参数*

---
“作为第一类对象，函数和JavaScript中其他对象一样。类似于其他对象类型，函数具有以下功能:
通过字面量创建。
赋值给变量或属性。
作为函数参数传递。
作为函数的结果返回。
赋值给属性和方法。

回调函数是被代码随后“回来调用”的函数，它是一种很常用的函数，特别是在事件处理场景下。
函数具有属性，而且这些属性能够被存储任何信息，我们可以利用这个特性来做很多事情；例如：
可以在函数属性中存储另一个函数用于之后的引用和调用。
可以用函数属性创建一个缓存（记忆），用于减少不必要的计算。
有很多不同类型的函数：函数声明、函数表达式、箭头函数以及函数生成器等。
函数声明和函数表达式是两种最主要的函数类型。函数声明必须具有函数名，在代码中它也必须作为一个独立的语句存在。函数表达式可以不必有函数名，但此时它就必须作为其他语句的一部分
“箭头函数是JavaScript的一个新增特性，这个特性让我们可以使用更简洁的方式来定义函数。
形参是函数定义时列出的变量，而实参是函数调用时传递给函数的值。
函数的形参列表和实参列表长度可以不同。
未赋值的形参求值得到undefined。
传入的额外实参不会被赋给任何一个命名形参。
剩余参数和默认参数是JavaScript的新特性。
剩余参数——不与任何形参名相匹配的额外实参可以通过剩余参数来引用。
默认参数——函数调用时，若没传入参数，默认参数可以给函数提供缺省的参数值。

思考:
“执行了如下的代码片段后，变量samurai和ninja的值分别是什么？
```
var samurai = (() => "Tomoe")(); //"Tomoe" 因为箭头跟的是表达式
var ninja = (() => { "Yoshi" })();”//undefined 因为这是一个没有return的代码块
```

# 函数进阶
函数调用时还会传递两个隐式的参数：arguments和this。

## arguments参数

arguments参数是传递给函数的所有参数集合

arguments对象有一个名为length的属性，表示实参的确切个数。通过数组索引的方式可以获取单个参数的值，例如，arguments[2]将获取第三个参数。

不要把arguments参数当作_数组_。你可能会被它的用法误导，毕竟它有length属性，而且可以通过数组下标的方式访问到每一个元素。但它并不是JavaScript数组,不能使用数组对象的原型方法;但是剩余参数是一个真数组

arguments可以作为参数的别名,但是要避免使用
```
function infiltrate(person) {
　assert(person === 'gardener',
　　'The person is a gardener');”
　assert(arguments[0] === 'gardener',
　　'The first argument is a gardener'); 　　⇽---　检查person参数的值等于gardener，并作为第一个参数被传入

　arguments[0] = 'ninja';

　assert(person === 'ninja',
　　'The person is a ninja now');
　assert(arguments[0] === 'ninja',
　　'The first argument is a ninja'); 　　⇽---　改变arguments对象的值也会改变相应的形参

　person = 'gardener';

　assert(person === 'gardener',
　　'The person is a gardener once more');
　assert(arguments[0] === 'gardener',
　　'The first argument is a gardener again'); 　　⇽---　这两种方式下，别名都正常工作了
}

infiltrate("gardener");
```

## this参数:函数上下文(执行函数的对象)

this参数是面向对象JavaScript编程的一个重要组成部分，代表函数调用相关联的对象。因此，通常称之为函数上下文。this就是函数上下文的意思,this就是函数上下文,函数上下文就是this

#### 作为函数直接被调用
```
function ninja() {};
ninja();　　⇽---　函数定义作为函数被调用

var samurai = function(){};
samurai();　　⇽---　函数表达式作为函数被调用
(function(){})()　　⇽---　会被立即调用的函数表达式，作为函数被调用
```
当以这种方式调用时，函数上下文（this关键字的值）有两种可能性：在非严格模式下，它将是全局上下文（window对象），而在严格模式下，它将是undefined。
```
function ninja() {
　return this;
}　　⇽---　非严格模式下的函数
ninjia();// Window对象

function samurai() {
　"use strict";
　return this;
}　　⇽---　严格模式下的函数
samurai()// undefined
```

#### 作为方法被调用

当一个函数被赋值给一个对象的属性，并且通过对象属性引用的方式调用函数时，函数会作为对象的方法被调用。示例如下：
```
var ninja = {};
ninja.skulk = function(){};
ninja.skulk();
```
这种情况下函数被称为方法,那么这种方法有什么特别之处呢?
如果你有面向对象编程的经历，一定会联想到是否可以在方法内部通过this访问到对象主体。这种情况下同样适用。当函数作为某个对象的方法被调用时，该对象会成为函数的上下文，并且在函数内部可以通过参数访问到。这也是JavaScript实现面向对象编程的主要方式之一。
函数直接调用和作为方法调用的差别:
```
function whatsMyContext() {
　return this;
}　　⇽---　返回函数上下文，从而让我们能从函数外面检查函数上下文

whatsMyContext() //window
　　⇽---　作为函数被调用并将其上下文设置为window对象

var getMyThis = whatsMyContext; 　　⇽---　变量getMyThis得到了函数whats MyContext的引用

getMyThis() //window;　　⇽---　使用变量getMyThis来调用函数，该函数仍然作为函数被调用，函数上下文也依然是window对象

var ninja1 = {
　getMyThis: whatsMyContext
};　　⇽---　创建一个对象ninjal，其属性getMyThis得到了函数whatsMy Context的引用

ninja1.getMyThis() //ninja1　　⇽---　使用ninja1对象的方法getMyThis来调用函数。函数上下文现在是ninja1了。这就是面向对象

var ninja2 = {
　getMyThis: whatsMyContext
};　　⇽---　创建一个对象ninja2，其属性getMyThis得到了函数whatsMy Context的引用

ninja2.getMyThis() //ninja2　　⇽---　使用ninja2对象的方法getMyThis来调用函数。函数上下文现在是ninja2
```
在整个示例中使用的是相同的函数——whatsMyContext，但通过this返回的函数上下文依然取决于whatsMyContext的调用方式。例如，ninja1和ninja2共享了完全相同的函数，但当执行函数时，该函数可以访问并操作所属对象的其他方法。因此我们不需要创建一个单独的函数副本来操作不同的对象进行相同的处理。这也是面向对象编程的魅力所在。

注意:
**将函数作为方法调用对于实现JavaScript面向对象编程至关重要。这样你就可以通过this在任何方法中引用该方法的“宿主”对象——这也是面向对象编程的一个基本概念。**

#### 作为构造函数调用

构造函数看作一个形式对象,new出来的看作实际对象,所以构造函数是形象,它的实例是实象;
```
function Ninja() {
　this.skulk = function() {
　　 return this;
　};
}　　⇽---　构造函数创建一个对象，并在该对象也就是函数上下文上添加一个属性skulk。这个skulk方法再次返回函数上下文，从而能让我们在函数外部检测函数上下文

var ninja1 = new Ninja();
var ninja2 = new Ninja();　　⇽---　通过关键字new调用构造函数创建两个新对象，变量ninja1和变量ninja2分别引用了这两个新对象

ninja1.skulk() //ninja1
ninja2.skulk() //ninja2　　⇽---　检测已创建对象中的skulk方法。每个方法都应该返回自身已创建的对象
```
如果构造函数返回一个对象，则该对象将作为整个表达式的值返回，而传入构造函数的this将被丢弃。
但是，如果构造函数返回的是非对象类型，则忽略返回值，返回新创建的对象。
如果不用new,直接调用构造函数,那么this在非严格模式下是window,严格模式下是undefined

#### 使用apply和call方法调用

**不同类型函数调用之间的主要区别在于：最终作为函数上下文（可以通过this参数隐式引用到）传递给执行函数的对象不同。对于方法而言，即为方法所在的对象；对于顶级函数而言是window或者undefined（取决于是否处于严格模式下）；对于构造函数而言是一个新创建的对象实例。**

但是，如果想改变函数上下文怎么办？如果想要显式指定它怎么办？如果……好吧，我们为什么会提出这样的问题？

可以使用apply和call方法显式地设置函数上下文。
JavaScript为我们提供了一种调用函数的方式，从而可以显式地指定任何对象作为函数的上下文。我们可以使用每个函数上都存在的这两种方法来完成：apply和call
传入call 和 apply 方法的第一个参数都会被作为函数上下文，不同处在于后续的参数。apply方法只需要一个额外的参数，也就是一个包含参数值的数组；call方法则需要传入任意数量的参数值，这些参数将用作函数的实参
```
function forEach(list, callback) {//forEach函数接收两个参数：需要遍历的集合和回调函数
　for (var n = 0; n < list.length; n++){
　　 callback.call(list[n], n);//当前遍历到的元素作为函数上下文调用回调函数
　}
}

var weapons = [ { type: 'shuriken' },
　　　　　　　　　 { type: 'katana' },
　　　　　　　　　 { type:'nunchucks' }];

forEach(weapons, function(index){
　　  weapons[index].type;
});　//调用迭代函数forEach，确保每个回调函数的上下文正确
```

#### 使用箭头函数绕过函数上下文

箭头函数没有单独的this值。箭头函数的this与声明所在的上下文的相同.**箭头函数在全局调用,this是window;箭头函数在函数中调用,是这个函数的对象**
调用箭头函数时，不会隐式传入this参数，而是从定义时的函数继承上下文。**箭头函数在构造函数内部时，this指向新创建的对象本身，因此无论何时调用构造函数创建对象，this都将指向新创建的对象。**

箭头函数和字面量对象

在全局代码中定义对象字面量，在字面量中定义箭头函数，那么箭头函数内的this指向全局window对象
```
var o={
    fun:function(){return this},
    t:()=> this
}

o.fun  //ƒ (){return this} this指向当前方法的对象,因为函数作为对象的方法调用

o.t() //Window {parent: Window, opener: null, top: Window, length: 1, frames: Window, …} //指向window(非严格模式) 因为箭头函数没有this值,函数在全局环境调用,this就是window
```
#### 使用bind方法

所有函数均可访问bind方法，可以创建并返回一个新函数，并绑定在传入的对象上（在本例中，绑定在button对象上）。不管如何调用该函数，this均被设置为对象本身。被绑定的函数与原始函数行为一致，函数体一致。
```
“<button id="test">Click Me!</button>
<script>
　var button = {
　　 clicked: false,
　　 click: function(){
　　　　this.clicked = true;　　
　　　　assert(button.clicked,"The button has been clicked");
　　}
};
var elem = document.getElementById("test");
elem.addEventListener("click", button.click.bind(button));　　
⇽---　使用bind函数创建新函数，绑定到button对象上
```
调用bind方法不会修改原始函数，而是创建了一个全新的函数
**小结:**
* 当调用函数时，除了传入在函数定义中显式声明的参数之外，同时还传入两个隐式参数：arguments与this。

  * arguments参数是传入函数的所有参数的集合。具有length属性，表示传入参数的个数，通过arguments参数还可获取那些与函数形参不匹配的参数。在非严格模式下，arguments对象是函数参数的别名，修改arguments对象会修改函数实参，可以通过严格模式避免修改函数实参。
  * this表示函数上下文，即与函数调用相关联的对象。函数的定义方式和调用方式决定了this的取值。
* 函数的调用方式有4种。
  * 作为函数调用：skulk()。
  * 作为方法调用：ninja.skulk()。
  * 作为构造函数调用：new Ninja()。
  * 通过apply与call方法调用：skulk.apply(ninja)或skulk.call(ninja)。
* 函数的调用方式影响this的取值。
  * 如果作为函数调用，在非严格模式下，this指向全局window对象；在严格模式下，this指向undefined。
  * 作为方法调用，this通常指向调用的对象。
  * 作为构造函数调用，this指向新创建的对象。
  * 通过call或apply调用，this指向call或apply的第一个参数。
* 箭头函数没有单独的this值，this在箭头函数创建时确定。
* 所有函数均可使用bind方法，创建新函数，并绑定到bind方法传入的参数上。被绑定的函数与原始函数具有一致的行为。

#闭包和作用域

一个简单的闭包
```
“var outerValue = "ninja";　　⇽---　在全局作用域中定义一个变量
function outerFunction() {
　 assert(outerValue === "ninja", "I can see the ninja."); 　　⇽---　在全局作用域中声明函数
}
outerFunction();　　⇽---　执行该函数”
```
我们在同一作用域中声明了变量outerValue及外部函数outerFunction——本例中，是全局作用域。然后，执行外部函数outerFunction。
该函数可以“看见”并访问变量outerValue。我们可能已经写过上百次这样的代码，但是却没有意识到其实我们正在创建一个闭包

## 使用闭包
#### 封装私有变量
```
function Ninja() {
　var feints = 0;
　this.getFeints = function() {
　　return feints;
　 };
　 this.feint = function() {
　　 feints++;
　 };
}
var a = new Ninja();
a.feints //undefined
```
在构造器内部，我们定义了一个变量feints用于保存状态。由于JavaScript的作用域规则的限制，因此只能在构造器内部访问该变量。为了让作用域外部的代码能够访问该变量，我们定义了访问该变量的方法getFeints。该方法可以读取私有变量，但不能改写私有变量。（只读访问的方法通常称为“getter”）
接下来创建增量方法feint，用于控制私有变量的值。在真实的应用程序中，该方法可能是一些业务逻辑的处理方法，但是在本例中，它只增加变量feints的值。

* 通过变量ninja，对象实例是可见的。
* 因为feint方法在闭包内部，因此可以访问变量feints。
* 在闭包外部，我们无法访问变量feints。

#### 回调函数

处理回调函数是另一种常见的使用闭包的情景。回调函数指的是需要在将来不确定的某一时刻异步调用的函数





