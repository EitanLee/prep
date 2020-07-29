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
<script src="相对路径/绝对路径"></script>
方法二，cdn引入
<script src="cdn地址"></script>