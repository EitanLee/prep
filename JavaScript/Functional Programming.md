### 函数式编程（Functional programming）

函数式编程是一种编程风格，其中解决方案是简单的隔离函数，而函数范围之外没有任何副作用。

输入->处理->输出

函数式编程是关于：

1）隔离的函数-不依赖于程序状态，其中包括可能更改的全局变量

2）纯函数-相同的输入总是给出相同的输出

3）具有有限副作用的功能-仔细控制功能外部程序状态的任何更改或突变
***
已经为您定义了prepareTea和getTea函数。 调用getTea函数为团队获取40杯茶，并将其存储在tea4TeamFCC变量中。
```
// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4TeamFCC = getTea(40);//存储了40个字符串‘greenTea’的数组
```
---
**了解函数式编程术语**
FCC团队情绪波动很大，现在想要两种茶：绿茶和红茶。一般事实：客户情绪波动非常普遍。

有了这些信息，我们需要从上一个挑战中重新访问getTea函数，以处理各种茶请求。我们可以修改getTea以接受一个函数作为参数，以能够更改其准备的茶的类型。这使getTea更加灵活，并在客户端请求更改时为程序员提供了更多控制权。

但首先，让我们介绍一些功能术语：

回调是滑入或传递到另一个函数中以确定该函数的调用的函数。您可能已经看到将它们传递给其他方法，例如在filter中，回调函数告诉JavaScript如何过滤数组的条件。

像其他任何普通值一样，可以分配给变量，传递给另一个函数或从另一个函数返回的函数称为第一类函数。在JavaScript中，所有功能都是一流的功能。

将函数作为参数或将函数作为返回值返回的函数称为高阶函数。

当这些函数传递给另一个函数或从另一个函数返回时，可以将传入或返回的那些函数称为lambda。

---
**了解使用命令式代码的危害**
函数式编程是一个好习惯。它使您的代码易于管理，并使您免于偷偷摸摸的错误。但是在到达那里之前，让我们看一下一种势在必行的编程方法，以突出您可能遇到的问题。

在英语（和许多其他语言）中，命令式时态用于发出命令。类似地，编程中的命令式风格是一种使计算机执行一组任务的语句。

语句通常会更改程序的状态，例如更新全局变量。一个经典的例子是编写一个for循环，该循环给出了精确的方向来迭代数组的索引。

相反，函数式编程是声明式编程的一种形式。您可以通过调用方法或函数来告诉计算机要执行的操作。

JavaScript提供了许多处理常见任务的预定义方法，因此您无需写出计算机应如何执行它们。例如，您可以调用map方法来处理在数组上进行迭代的细节，而不是使用上述的for循环。这有助于避免语义错误，例如“调试”部分中介绍的“一次失误”。

考虑以下情况：您正在浏览器中浏览Web，并希望跟踪已打开的选项卡。让我们尝试使用一些简单的面向对象的代码对此进行建模。

一个Window对象由选项卡组成，通常您打开了多个Window。每个Window对象中每个打开的站点的标题都保存在一个数组中。在浏览器中工作（打开新选项卡，合并窗口和关闭选项卡）之后，您要打印仍处于打开状态的选项卡。已关闭的选项卡从数组中删除，新的选项卡（为简单起见）被添加到数组的末尾。

代码编辑器通过tabOpen（），tabClos​​e（）和join（）函数显示了此功能的实现。数组选项卡是Window对象的一部分，该对象存储打开的页面的名称。

---
**使用函数式编程避免突变和副作用**
如果您还没有弄清楚，那么上一个挑战中的问题就是tabClos​​e（）函数中的拼接调用。不幸的是，splice更改了它调用的原始数组，因此第二次调用它使用了修改后的数组，并产生了意外的结果。

这是一个更大的模式的小例子-您在变量，数组或对象上调用函数，而函数会更改变量或对象中的某些内容。

函数式编程的核心原则之一是不改变事物。更改会导致错误。防止错误知道您的函数不会更改任何东西（包括函数参数或任何全局变量）会更容易。

前面的示例没有任何复杂的操作，但是splice方法更改了原始数组，并导致了错误。

回想一下，在函数式编程中，更改或更改事物称为mutation（变异），而结果称为a side effect（副作用）。理想情况下，函数应该是pure function（纯函数），这意味着它不会引起任何副作用。

让我们尝试掌握这一原则，不要在我们的代码中更改任何变量或对象。

---
**传递参数以避免函数中的外部依赖**
最后的挑战是离函数式编程原理更近的一步，但是仍然缺少一些东西。

我们没有更改全局变量值，但是如果没有全局变量fixedValue，函数增量器将无法工作。

函数式编程的另一个原则是始终明确声明依赖项。 这意味着如果函数依赖于存在的变量或对象，则将该变量或对象作为参数直接传递给函数。

这个原则有几个好的结果。 该函数更易于测试，您确切知道它需要什么输入，并且它不会依赖于程序中的任何其他内容。

当您更改，删除或添加新代码时，这可以使您更有信心。 您将知道可以更改或无法更改的内容，并且可以看到潜在陷阱在哪里。

最后，无论代码的哪一部分执行该函数，该函数将始终为相同的一组输入产生相同的输出。

---
**从函数中重构全局变量**
到目前为止，我们已经看到了函数编程的两个截然不同的原理：

1）不要更改变量或对象-创建新的变量和对象，并在需要时从函数返回它们。

2）声明函数参数-函数内部的任何计算仅取决于参数，而不取决于任何全局对象或变量。

我们可以在处理数组或更复杂的对象时应用这些原理。

---
**使用map方法从数组中提取数据**
到目前为止，我们已经学会了使用纯函数来避免程序中的副作用。另外，我们已经看到了具有函数的价值仅取决于其输入参数。

这仅仅是个开始。顾名思义，函数式编程以函数论为中心。

能够将它们作为参数传递给其他函数，并从另一个函数返回一个函数将是有意义的。函数被视为JavaScript中的第一类对象，这意味着它们可以像其他任何对象一样使用。它们可以保存在变量中，存储在对象中或作为函数参数传递。

让我们从一些简单的数组函数开始，它们是数组对象原型上的方法。在本练习中，我们看的是Array.prototype.map（），或更简单地说是map。

map方法遍历数组中的每个项目，并返回一个新数组，其中包含对每个元素调用回调函数的结果。它无需更改原始数组即可做到这一点。

使用回调时，将传递三个参数。第一个参数是当前正在处理的元素。第二个是该元素的索引，第三个是在其上调用map方法的数组。

参见下面的示例，在users数组上使用map方法返回一个仅包含用户名作为元素的新数组。为简单起见，该示例仅使用回调的第一个参数。
```
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const names = users.map(user => user.name);
console.log(names); // [ 'John', 'Amy', 'camperCat' ]
```
箭头函数加括号的函数体返回对象字面量表达式：
params => ({foo: bar})})

---
**在原型上封装一个自己的map()方法**
从应用Array.prototype.map（）或更早的map（）可以看到，map方法返回的数组长度与调用它的长度相同。 只要它的回调函数不改变，它也不会改变原始数组。

换句话说，map是一个纯函数，其输出仅取决于其输入。 另外，它将另一个函数作为参数。

它将教给我们很多有关map的知识，以尝试实现行为与for。循环或Array.prototype.forEach（）完全一样的Array.prototype.map（）的版本。

注意：允许纯函数更改在其范围内定义的局部变量，但是最好也避免这样做。

㈠利用forEach方法实现
```
// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  var newArray = [];
  // Add your code below this line
  this.forEach(a => newArray.push(callback(a)));
  // Add your code above this line
  return newArray;
};

var new_s = s.myMap(function(item) {
  return item * 2;
});
```
㈡利用for循环实现
```
// The global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  var newArray = [];

  // Add your code below this line
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]));
  }
  // Add your code above this line

  return newArray;
};

var new_s = s.myMap(function(item) {
  return item * 2;
});
```
㈢递归的方法
```
// The global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback, arr = [], i = 0) {
  return i < this.length
    ? this.myMap(callback, arr.concat(callback(this[i])), i + 1)
    : arr;
};

var new_s = s.myMap(function(item) {
  return item * 2;
});
```
---
**使用filter（过滤器）方法从数组中提取数据**
另一个有用的数组函数是Array.prototype.filter（）或简称为filter（）。

filter对数组的每个元素调用一个函数，并返回一个仅包含该函数返回true的元素的新数组。 换句话说，它根据传递给它的函数过滤数组。 与map一样，它无需修改原始数组即可执行此操作。

回调函数接受三个参数。 第一个参数是当前正在处理的元素。 第二个是该元素的索引，第三个是在其上调用filter方法的数组。

请参见下面的示例，在users数组上使用filter方法返回一个仅包含30岁以下用户的新数组。为简单起见，该示例仅使用回调的第一个参数。
```
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const usersUnder30 = users.filter(user => user.age < 30);
console.log(usersUnder30); // [ { name: 'Amy', age: 20 }, { name: 'camperCat', age: 10 } ]
```
---
**在原型上封装一个自己的filter方法**
如果我们尝试实现与Array.prototype.filter（）完全一样的行为，它将教给我们很多关于filter方法的知识。 它可以使用for循环或Array.prototype.forEach（）。

注意：允许纯函数更改在其范围内定义的局部变量，但是最好也避免这样做。

㈠自己的for循环方法
```
// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  // Only change code below this line
  var newArray = [];
  for(let i=0;i<this.length;i++){
    if(callback(this[i])){
    newArray.push(this[i])
    }
  }
  // Only change code above this line
  return newArray;
};
var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});
```
㈡forEach方法
```
// The global variable
let s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  // Only change code below this line
  let newArray = [];
  this.forEach(function(x) {
    if (callback(x) == true) {
      newArray.push(x);
    }
  });
  // Only change code above this line
  return newArray;
};

let new_s = s.myFilter(function(item){
  return item % 2 === 1;
});
```
---
**使用slice方法返回数组的一部分**
slice方法返回数组某些元素的副本。 它可以有两个参数，第一个给出切片起始位置的索引，第二个给出切片起始位置的索引（且不包含在内）。 如果未提供参数，则默认值是从数组的开头到结尾开始，这是复制整个数组的简便方法。 slice方法不会改变原始数组，但会返回一个新数组。

这是一个例子：
```
var arr = ["Cat", "Dog", "Tiger", "Zebra"];
var newArray = arr.slice(1, 3);
// Sets newArray to ["Dog", "Tiger"]
```

---
**使用slice而不是splice从数组中删除元素**
使用数组时的一种常见模式是您要删除项目并保留数组的其余部分。 JavaScript为此提供了splice方法，该方法使用参数作为开始删除项目的索引，然后指定要删除的项目数。 如果未提供第二个参数，则默认为从头删除项目。 但是，splice方法会使它被调用的原始数组发生突变。 这是一个例子：
```
var cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
cities.splice(3, 1); // Returns "London" and deletes it from the cities array
// cities is now ["Chicago", "Delhi", "Islamabad", "Berlin"]
```
正如我们在上一个挑战中看到的那样，slice方法不会改变原始数组，而是返回一个可以保存到变量中的新数组。 回想一下，slice方法使用两个参数来使索引开始和结束切片（结尾不包含在内），并在新数组中返回这些项目。 使用slice方法而不是splice方法有助于避免任何数组突变的副作用。

---
**使用concat方法组合两个数组**
串联意味着端到端地连接项目。 JavaScript为以相同方式工作的字符串和数组提供concat方法。 对于数组，该方法在一个数组a上调用，然后提供另一个数组b作为concat的参数，并将其添加到第一个数组a的末尾。 它返回一个新数组c，并且不对两个原始数组进行突变。 这是一个例子：
```
[1, 2, 3].concat([4, 5, 6]);
// Returns a new array [1, 2, 3, 4, 5, 6]
```

---
**使用concat而不是push将元素添加到数组的末尾**
函数式编程全部关于创建和使用非变异函数。

最后一个挑战引入了concat方法，该方法是一种将数组组合为新数组而不改变原始数组的方法。 将concat与push方法进行比较。 Push将项目添加到被调用的同一数组的末尾，从而使该数组发生变化。 这是一个例子：
```
var arr = [1, 2, 3];
arr.push([4, 5, 6]);
// arr is changed to [1, 2, 3, [4, 5, 6]]
// Not the functional programming way
```
Concat提供了一种在数组末尾添加新项而又不会产生任何副作用的方法。

---
**使用reduce(化简)方法分析数据**
Array.prototype.reduce（）或简称reduce（）是JavaScript中所有数组操作中最通用的。您可以使用reduce方法解决几乎所有的数组处理问题。

reduce方法允许使用更通用的数组处理形式，并且有可能表明filter和map都可以作为reduce的特殊应用派生。 reduce方法迭代数组中的每个项目，并返回单个值（即字符串，数字，对象，数组）。这是通过在每次迭代中调用一个回调函数来实现的。

回调函数接受四个参数。第一个参数称为累加器，它从上一次迭代中获得回调函数的返回值，第二个是正在处理的当前元素，第三个是当前元素的索引，第四个是调用这个函数的数组。

除了回调函数外，reduce还具有一个附加参数，该参数采用累加器的初始值。如果不使用此参数，则跳过第一个迭代，第二个迭代作为累加器传递给数组的第一个元素。

请参阅下面的示例，在users数组上使用reduce来返回所有用户年龄的总和。为简单起见，该示例仅使用第一个和第二个参数。
```
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const sumOfAges = users.reduce((sum, user) => sum + user.age, 0);
console.log(sumOfAges); // 64
```
在另一个示例中，查看如何返回一个包含用户名称作为属性以及其年龄作为值的对象。
```
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const usersObj = users.reduce((obj, user) => {
  obj[user.name] = user.age;
  return obj;
}, {});
console.log(usersObj); // { John: 34, Amy: 20, camperCat: 10 }
```

**使用高阶函数 map（映射）、filter（过滤）或reduce（归约） ，以解决复杂的问题**
现在，您已经使用了诸如map（），filter（）和reduce（）之类的高阶函数解决了一些难题，现在您可以应用它们来解决更复杂的难题。
```
const squareList = arr =>
  arr
    .filter(num => num > 0 && num % parseInt(num) === 0)
    .map(num => Math.pow(num, 2));

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);//[25,9]
```

**使用sort方法按字母顺序对数组进行排序**
sort方法根据回调函数对数组的元素进行排序。 例如：
```
function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}
ascendingOrder([1, 5, 2, 3, 4]);
// Returns [1, 2, 3, 4, 5]

function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}
reverseAlpha(['l', 'h', 'z', 'b', 's']);
// Returns ['z', 's', 'l', 'h', 'b']
```
JavaScript的默认排序方法是按字符串Unicode点值进行，这可能会返回意外结果。 因此，建议提供一个回调函数来指定如何对数组项进行排序。 提供此类回调函数（通常称为compareFunction）时，将根据compareFunction的返回值对数组元素进行排序：如果compareFunction（a，b）对于两个元素a和b返回小于0的值，则a 在b。之前 如果compareFunction（a，b）对于两个元素a和b返回大于0的值，则b将在a之前。 如果compareFunction（a，b）对于两个元素a和b返回等于0的值，则a和b将保持不变。

**返回排序后的数组而不更改原始数组**
sort方法的副作用是它更改了原始数组中元素的顺序。 换句话说，它会在适当的位置改变数组。 避免这种情况的一种方法是先将一个空数组连接到要排序的数组（请记住slice和concat返回一个新数组），然后运行sort方法。
```
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
      let a = [...arr];
      return a.sort(function(a,b){
        return a-b;
      })
}
nonMutatingSort(globalArray);
```

**使用split方法将字符串拆分为数组**
split方法将字符串拆分为字符串数组。 它使用分隔符作为参数，该参数可以是用于分解字符串或正则表达式的字符。 例如，如果定界符是空格，则得到一个单词数组，如果定界符是空字符串，则得到字符串中每个字符的数组。

这是两个示例，使用正则表达式将一个字符串按空格分隔，然后将另一个按数字分隔：
```
var str = "Hello World";
var bySpace = str.split(" ");
// Sets bySpace to ["Hello", "World"]

var otherString = "How9are7you2today";
var byDigits = otherString.split(/\d/);
// Sets byDigits to ["How", "are", "you", "today"]
```
由于字符串是不可变的，因此split方法使使用它们变得更加容易。

**使用join方法将数组合并为字符串**
join方法用于将数组的元素连接在一起以创建字符串。它使用分隔符的参数，该分隔符用于分隔字符串中的数组元素。 这是一个例子：
```
var arr = ["Hello", "World"];
var str = arr.join(" ");
// Sets str to "Hello World"
```
**应用函数式编程将字符串转换为URL段**
最后几个挑战涉及遵循函数式编程原理的许多有用的数组和字符串方法。 我们还了解了reduce，这是一种用于将问题简化为更简单形式的强大方法。 从计算平均值到排序，任何数组运算都可以通过应用它来实现。 回想一下map和filter是reduce的特殊情况。

让我们结合所学的知识来解决实际问题。

许多内容管理网站（CMS）都将帖子的标题添加到URL的一部分中，以简化标题的形式。 例如，如果您写了一个标题为“ Stop Using Reduce”的中型帖子，则该URL中可能包含某种形式的标题字符串（“ ... / stop-using-reduce”）。 您可能已经在freeCodeCamp网站上注意到了这一点。

填写urlSlug函数，以便它转换字符串标题并返回URL的连字符版本。 您可以使用本节介绍的任何方法，并且不要使用replace。 要求如下：
输入是带有空格和标题大写的单词的字符串
输出是一个字符串，单词之间的空格由连字符（-）替换
输出应全部为小写字母
输出不应有任何空格
```
// The global variable
var globalTitle = "Winter Is Coming";
function urlSlug(title) {
  return title
    .split(/\W/)
    .filter(obj => {
      return obj !== "";//去掉空格
    })
    .join("-")
    .toLowerCase();
}
console.log(urlSlug(globalTitle))
```

---
**使用every方法检查数组中的每个元素是否符合条件**
every方法与数组配合使用，以检查每个元素是否通过特定测试。它返回一个布尔值-如果所有值均符合条件，则返回true，否则返回false。
例如，以下代码将检查numbers数组中的每个元素是否小于10：
```
var numbers = [1, 5, 8, 0, 10, 11];
numbers.every(function(currentValue) {
  return currentValue < 10;
});
// Returns false
```

---
**使用some方法检查数组中的所有元素是否符合条件**
some方法与数组配合使用，以检查是否有任何元素通过特定测试。它返回一个布尔值-如果任何值满足条件，则返回true，否则返回false。
例如，以下代码将检查numbers数组中的任何元素是否小于10：
```
var numbers = [10, 50, 8, 220, 110, 11];
numbers.some(function(currentValue) {
  return currentValue < 10;
});
// Returns true
```
**Currying（柯里化）和部分应用简介**
函数的多样性是它需要的参数数量。 currying函数意味着将N个arity的功能转换为arity 1的N个功能。

换句话说，它重组了一个函数，使其接受一个参数，然后返回另一个接受下一个参数的函数，依此类推。

这是一个例子：
```
//Un-curried function
function unCurried(x, y) {
  return x + y;
}

//Curried function
function curried(x) {
  return function(y) {
    return x + y;
  }
}
//Alternative using ES6
const curried = x => y => x + y

curried(1)(2) // Returns 3
```
如果您无法一次将所有参数提供给一个函数，则这在您的程序中很有用。 您可以将每个函数调用保存到一个变量中，该变量将保存返回的函数引用，该引用在下一个可用参数时可用。 这是上面示例中使用curried函数的示例：
```
// Call a curried function in parts:
var funcForY = curried(1);
console.log(funcForY(2)); // Prints 3
```
同样，部分应用程序可以描述为一次将几个参数应用于一个函数，然后返回另一个应用于更多参数的函数。这是一个例子：
```
//Impartial function
function impartial(x, y, z) {
  return x + y + z;
}
var partialFn = impartial.bind(this, 1, 2);
partialFn(10); // Returns 13
```




























































































































