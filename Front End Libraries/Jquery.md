### 基本的jQuery

jQuery 是 JavaScript 的许多库之一。它旨在简化在客户端完成的脚本。jQuery 最明显的特征是它的美元符号 $ 语法。有了它，您可以轻松地操作元素，创建动画和处理输入事件。

---
**自己实现一个类似jQuery的函数**

要求函数实现传入一个元素节点，返回他的所有兄弟元素节点的数组
比如一个无序列表
```
    <ul>
      <li id="item1">选项1</li>
      <li id="item2">选项2</li>
      <li id="item3">选项3</li>
      <li id="item4">选项4</li>
      <li id="item5">选项5</li>
    </ul>
```
封装一个getSiblings函数
```
function getSiblings(node){
    var allChildren = node.parentNode.children;//获取父节点的所有子节点
    var siblings = {length:0};  //用于存储结果的键值对
    for (let i = 0; i < allChildren.length; i++) {
        if(allChildren[i] !== node){
            siblings[siblings.length] = allChildren[i];
            siblings.length+=1;
        }
    }
    return siblings;
}

window.$ = {}; //添加到window中，变成全局方法,甚至可以window.$=getSiblings,让$与getSiblings绑定
$.getSiblings = getSiblings;

$.getSiblings(item3);//logs:{0: li#item1, 1: li#item2, 2: li#item4, 3: li#item5, length: 4}
```

**优化getSiblings方法**

我们觉得$.getSiblings(item3)这样写有点麻烦，既要写长串代码还要传参数，能不能优化呢？当然可以

**第一种方法：**
将getSiblings方法添加到Node的原型中，使之成为Node对象的原型方法，这样所有的节点元素都可以调用这个方法
```
Node.prototype.getSibilings = function getSiblings(){
    var allChildren = this.parentNode.children;
    var siblings = {length:0};  
    for (let i = 0; i < allChildren.length; i++) {
        if(allChildren[i] !== this){
            siblings[siblings.length] = allChildren[i];
            siblings.length+=1;
        }
    }
    return siblings;
}
//调用
item3.getSibilings();
```
**第二种方法：**
添加到全局对象jQuery中
```
window.jQuery = function(selector){
    let nodes;
    if(typeof selector === 'string'){
        nodes = document.querySelectorAll(selector);
    }else if(selector instanceof Node){
        nodes[0] = selector;    
        nodes.length=1;
    }
   
    nodes.addClass = function(className){
        className.forEach(currentValue => {
            for(let i=0;i<nodes.length;i++){
                nodes[i].classList.add(currentValue);
            }
        });
    }

    nodes.text= function(text){
        if(text === undefined){   //如果text是undefined，没有传参数，说明想获取文本节点的内容
            let texts =[];
            for(let i=0;i<nodes.length;i++){
                texts.push(nodes[i].textContent);
            }
            return texts;
        }else{          
            //如果传了参数，说明想要设置文本节点的内容
            for (let i = 0; i < nodes.length; i++) {
                nodes[i].textContent=text;
            }
        }
    }
    return nodes;

}
//调用
var node1 = jQuery('#md>li'); //先获取元素节点
console.log(node1.addClass(['b']));//调用addClass方法
console.log(node1.text()); //调用text方法
```
第二种方法叫做（无侵入）:主要是通过回调函数实现的
例如
```
function jQuery(node){
    return{
        element:node,
        getSiblings:function(){

        },
        addClass:function(){

        }
    }
}
window.$ = jQuery;
let node = document.getElementById()
let $node2 = $(node)  //在命名时加上$以区分jQuery的元素
node2.getSiblings()
node2.addClass()
```

**页面引入jQuery**
方法一，本地下载
```
<script src="相对路径/绝对路径"></script>
```
方法二，cdn引入
```
<script src="cdn地址"></script>
```
**了解脚本标签和文档的准备工作**
重要的是要知道，放入浏览器的代码将在浏览器加载页面后立即运行。
这很重要，因为如果没有文档就绪功能，则代码可能会在呈现HTML之前运行，这会导致错误。
```
<script>
  $(document).ready(function() {
  });
</script>
```


**使用jQuery使用选择器定位HTML元素**

现在我们有了文档准备功能。

现在让我们编写第一个jQuery语句。 所有jQuery函数均以$开头，通常称为美元符号运算符或bling。

jQuery通常使用选择器选择一个HTML元素，然后对该元素执行某些操作。

例如，让我们所有的按钮元素弹跳。 只需在您的文档准备功能内添加以下代码：
```
$("button").addClass("animated bounce");
```
请注意，我们已经在后台包含了jQuery库和Animate.css库，以便您可以在编辑器中使用它们。 因此，您正在使用jQuery将Animate.css反弹类应用于按钮元素。
```
<script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
  });
</script>

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
```
**使用jQuery按class定位目标元素**
您知道我们如何使您所有的按钮元素弹跳吗？ 我们使用$（“ button”）选择它们，然后使用.addClass（“ animated bounce”）;向它们添加一些CSS类。

您仅使用了jQuery的.addClass（）函数，该函数允许您向元素添加类。

首先，让我们使用$（“.well”）选择器将class是well的div元素作为目标。

请注意，就像CSS声明一样，您可以在类名前面输入 . 

然后使用jQuery的.addClass（）函数添加animated类和bounce类。

例如，您可以通过将以下内容添加到文档就绪函数中来使所有元素与text-primary类保持一致：
```
$(".text-primary").addClass("animated shake");
```

**使用jQuery通过id定位目标元素**
您还可以通过元素的id属性来定位它们。

首先使用$（“＃target3”）选择器将ID为target3的按钮元素作为目标。

请注意，就像CSS声明一样，您在ID名称之前输入＃。

然后使用jQuery的.addClass（）函数添加动画类和fadeOut类。

这是使id为target6的按钮元素淡出的方法：
```
$("#target6").addClass("animated fadeOut").
```
**删除您的jQuery函数**
```
<script>
  $(document).ready(function() {
  });
</script>
```
**使用多个jQuery选择器定位同一元素**
现在，您知道了三种定位元素的方式：按类型：$（“button”），按类：$（“.btn”）和按ID $（“＃target1”）。

尽管可以在单个.addClass（）调用中添加多个类，但让我们以三种不同的方式将它们添加到同一元素中。
使用.addClass（），可以通过三种不同方式一次仅将一个类添加到同一元素：
使用类型按钮将动画类添加到所有元素。
将震动类添加到所有带有.btn类的按钮。
将btn-primary类添加到ID为＃target1的按钮。
注意
您只应针对一个元素并一次仅添加一个类。 总之，您的三个单独的选择器最终将在＃target1中添加震动，动画和btn-primary这三个类。
```
<script>
  $(document).ready(function() {
    $("button").addClass("animated");
    $(".btn").addClass("shake")
    $("#target1").addClass("btn-primary")
  });
</script>
```
**使用removeClass（）从元素中删除类**
您可以使用jQuery的addClass（）函数将类添加到元素的方式相同，也可以使用jQuery的removeClass（）函数将类删除。

这是您要针对特定按钮执行的操作：
```
$("#target2").removeClass("btn-default");
```
**使用css（）更改元素的CSS**
我们还可以直接使用jQuery更改HTML元素的CSS。

jQuery有一个名为.css（）的函数，可让您更改元素的CSS。

这是我们将其颜色更改为蓝色的方法：
```
$("#target1").css("color", "blue");
```
这与普通的CSS声明略有不同，因为CSS属性及其值用引号引起来，并用逗号而不是冒号分隔。

**使用prop（）禁用元素**
您也可以使用jQuery更改HTML元素的非CSS属性。 例如，您可以禁用按钮。

禁用按钮后，该按钮将变为灰色，无法再单击。

jQuery有一个名为.prop（）的函数，可让您调整元素的属性。

禁用所有按钮的方法如下：
```
$("button").prop("disabled", true);
```
**使用html（）、text（）更改元素内的文本**
使用jQuery，您可以在元素的开始和结束标签之间更改文本。您甚至可以更改HTML标记。

jQuery有一个名为.html（）的函数，可让您在元素内添加HTML标签和文本。元素中先前包含的所有内容将完全替换为您使用此功能提供的内容。

这是您重写和强调我们标题文字的方式：
```
$("h3").html("<em>jQuery Playground</em>");
```
jQuery还有一个类似的功能，称为.text（），它仅更改文本而不添加标签。换句话说，此函数将不会评估传递给它的任何HTML标记，而会将其视为您要替换现有内容的文本。

**使用remove（）删除元素**
现在，让我们使用jQuery从页面中删除HTML元素。

jQuery有一个名为.remove（）的函数，它将完全删除一个HTML元素。

使用.remove（）函数从页面中删除元素target4。
```
$("#target4").remove()
```
**使用appendTo通过jQuery移动元素**
现在，让我们尝试将元素从一个div移动到另一个div。

jQuery具有一个名为appendTo（）的函数，该函数允许您选择HTML元素并将它们附加到另一个元素。

例如，如果我们想将target4从我们的右孔移到我们的左孔，我们将使用：
```
$("#target4").appendTo("#left-well");
```
**使用clone（）克隆元素**
除了移动元素之外，您还可以将它们从一个地方复制到另一个地方。

jQuery具有一个称为clone（）的功能，该功能可复制元素。

例如，如果我们想将target2从左孔复制到右孔，则可以使用：
```
$("#target2").clone().appendTo("#right-well");
```
您是否注意到这涉及将两个jQuery函数粘贴在一起？ 这称为函数链接，这是使用jQuery完成工作的便捷方式。

**使用parent（）定位元素的父级**
每个HTML元素都有一个父元素，它可以从中继承属性。

例如，您的jQuery Playground h3元素具有<div class =“ container-fluid”>父元素，该元素本身具有父正文。

jQuery有一个称为parent（）的函数，该函数使您可以访问所选元素的父级。

这是一个示例，如果您想为左井元素的父元素赋予蓝色背景色，将如何使用parent（）函数：
```
$("#left-well").parent().css("background-color", "blue")
```

**使用children（）定位元素的子元素**
将HTML元素放置在另一层之下时，它们称为该元素的子级。 例如，此挑战中带有文本“＃target1”，“＃target2”和“＃target3”的按钮元素都是<div class =“ well” id =“ left-well”>元素的所有子元素。

jQuery有一个称为children（）的函数，该函数使您可以访问所选元素的子级。

这是一个示例，说明如何使用children（）函数为#left-well元素的子级赋予蓝色：
```
$("#left-well").children().css("color", "blue")
```
**使用jQuery定位元素的特定子元素**
您已经了解了为什么id属性如此方便使用jQuery选择器进行定位。 但是您将不会总是拥有如此整洁的ID。

幸运的是，jQuery还有一些针对正确元素的技巧。

jQuery使用CSS选择器来定位元素。 target：nth-child（n）CSS选择器允许您选择具有目标类或元素类型的所有n个元素。

这是为一些target类中的第三个target设置bounce类的方法：
```
$(".target:nth-child(3)").addClass("animated bounce");
```
**使用:odd或者:even定位奇数/偶数元素**
您也可以使用：odd或：even选择器根据元素的位置来定位。

请注意，jQuery是零索引的，这意味着选择中的第一个元素的位置为0。与直觉相反，：odd选择第二个元素（位置1），第四个元素（位置3）可能有点令人困惑。

这是使用odd方法定位target所有奇数元素并为其分配class的方法：
```
$(".target:odd").addClass("animated shake");
```
**使用jQuery修改整个页面**
我们已经完成了jQuery游乐场的玩耍。 让我们把它拆下来！

jQuery也可以定位body元素。

这是使整个主体淡出的方式：
```
$("body").addClass("animated fadeOut");
```
































