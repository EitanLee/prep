### Array

下面是**数组数据结构**的最简单实现的示例。这称为**一维数组** ，这意味着它只有一个级别，或者它里面没有嵌套任何其他数组。请注意，它包含布尔、字符串和数字，以及其他有效的 JavaScript 数据类型：
```
let simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray.length);
// logs 7
```


所有数组都有一个长度属性，如上所示，可以使用Array.length语法访问 。下面可以看到一个更复杂的数组实现。这称为**多维数组**，或包含其他数组的数组。请注意，此数组还包含JavaScript 对象，我们将在下一节中非常仔细地检查这些对象，但现在，您需要了解的是，数组也能够存储复杂的对象。
```
let complexArray = [
  [
    {
      one: 1,
      two: 2
    },
    {
      three: 3,
      four: 4
    }
  ],
  [
    {
      a: "a",
      b: "b"
    },
    {
      c: "c",
      d: "d"
    }
  ]
];
```
通过索引访问数组中的项，array[i],也可以更改数组中某项的值
```
let ourArray = ["a", "b", "c"];

let ourVariable = ourArray[0];
// ourVariable equals "a"

ourArray[1] = "not b anymore";
// ourArray now equals ["a", "not b anymore", "c"];
```


**Array.push()和Array.unshift()方法添加数组项**
这两种方法都采用一个或多个元素作为参数，并将这些元素添加到调用此方法的数组中;push()方法将元素添加到数组的末尾，unshift()并将元素添加到数组的开头。
```
let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];

romanNumerals.unshift('XIX', 'XX');
// now equals ['XIX', 'XX', 'XXI', 'XXII']

romanNumerals.push(twentyThree);
// now equals ['XIX', 'XX', 'XXI', 'XXII', 'XXIII']注意，我们还可以传递变量，这使我们在动态修改数组数据时具有更大的灵活性。
```


**使用pop()和shift()从数组中删除项目**
push（）和unshift（）都具有几乎与功能相反的对应方法：pop（）和shift（）。pop（）不是添加，而是从数组的末尾删除元素，而shift（）则从开头删除元素。 pop（）和shift（）以及它们的表亲push（）和unshift（）之间的主要区别在于，这两个方法都不采用参数，并且每个方法一次仅允许单个元素修改数组。
```
let greetings = ['whats up?', 'hello', 'see ya!'];

greetings.pop();
// now equals ['whats up?', 'hello']

greetings.shift();
// now equals ['hello']
```
我们还可以使用这两种方法返回被移除元素的值：
```
let popped = greetings.pop();
// returns 'hello'
// greetings now equals []
```

**使用splice（）删除项目**
shift（）和pop（）从数组的开头和结尾删除元素，但是如果我们想从中间的某个位置删除元素怎么办？ 还是一次删除多个元素？ 好了，这就是splice（）的用处。splice（）允许我们这样做：从数组中的任何位置删除任意数量的连续元素。
splice（）最多可以包含3个参数，但现在，我们仅关注前两个参数。splice（）的前两个参数是整数，它们表示splice（）正在被数组的索引或位置。第一个参数表示要从中开始删除元素的数组的索引，记住，数组索引是从0开始的，因此要表示数组的第一个元素，我们将使用0。而第二个参数表示要删除的元素数。 
**注意：splice删除元素后，原数组将被改变
```
let array = ['today', 'was', 'not', 'so', 'great'];

array.splice(2, 2);
// remove 2 elements beginning with the 3rd element
// array now equals ['today', 'was', 'great']
```
splice（）不仅修改正在调用的数组，而且还返回一个包含删除元素值的新数组：
```
let array = ['I', 'am', 'feeling', 'really', 'happy'];

let newArray = array.splice(3, 2);
// newArray equals ['really', 'happy']
```


**使用splice（）添加项目**
splice（）最多可以包含三个参数， 所以，您可以使用由一个或多个元素组成的第三个参数添加到数组中。这对于将一个元素或一组元素快速切换出另一个元素非常有用。
```
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
// the second entry of 12 is removed, and we add 13 and 14 at the same index
console.log(numbers);
// returns [ 10, 11, 12, 13, 14, 15 ]
```
在这里，splice()的三个参数分别表示， 从索引值为3的元素开始删除，要删除的元素数为（1）和要在同一索引处插入的元素（13、14）。 请注意，在amountToDelete之后可以有任意数量的元素（用逗号分隔），每个元素都可以插入。


**使用slice（）复制数组项**
slice（）不会修改数组，而是将给定数量的元素复制或提取到新数组中，而无需修改即可调用该数组。 slice（）仅接受2个参数-第一个是开始提取的索引，第二个是停止提取的索引（提取将进行直到（**但不包括）该元素处的元素**）。
```
let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1, 3);
// todaysWeather equals ['snow', 'sleet'];
// weatherConditions still equals ['rain', 'snow', 'sleet', 'hail', 'clear']
```

**使用剩余运算符复制数组**
```
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
// thatArray equals [true, true, undefined, false, null]
// thisArray remains unchanged, and is identical to thatArray
```

**使用剩余运算符组合数组**
剩余运算符的另一个巨大优势是能够组合数组，或在任何索引处将一个数组的所有元素插入另一个数组的能力。 使用更传统的语法，我们可以连接数组，但这仅允许我们在一个数组的结尾和另一个数组的开头合并数组。 传播语法使以下操作极为简单：
```
let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
// thatArray now equals ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']
```


**使用indexOf（）检查数组的元素是否存在**
由于可以随时更改或更改数组，因此无法保证特定数据在给定数组上的位置，或者该元素是否仍然存在。 幸运的是，JavaScript为我们提供了另一个内置方法indexOf（），它使我们能够快速轻松地检查数组中元素的存在。 indexOf（）将元素作为参数，并在调用时返回该元素的位置或索引，如果数组中不存在该元素，则返回-1。
```
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates'); // returns -1 不存在'dates'
fruits.indexOf('oranges'); // returns 2
fruits.indexOf('pears'); // returns 1, 具有多个相同元素，返回第一个的索引
```


**使用 For 循环遍历所有数组项**
```
function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

greaterThanTen([2, 12, 8, 14, 80, 0, 1]);
// returns [12, 14, 80]
```
使用for循环，此函数可循环访问并访问数组的每个元素，并对它进行我们创建的简单测试。 这样，我们就可以轻松地以编程方式确定哪些数据项大于10，并返回包含这些项的新数组。


**创建复杂的多维数组**
将数组视为数据结构时，最强大的功能之一是数组可以包含甚至完全由其他数组组成。 我们已经看到了在以前的挑战中包含数组的数组，但是相当简单。 但是，数组可以包含无限深度的数组，该数组可以包含其他数组，每个数组都有自己的任意深度级别，依此类推。 这样，数组可以很快变成非常复杂的数据结构，称为多维数组或嵌套数组。 考虑以下示例：
```
let nestedArray = [ // top, or first level - the outer most array
  ['deep'], // an array within an array, 2 levels of depth
  [
    ['deeper'], ['deeper'] // 2 arrays nested 3 levels deep
  ],
  [
    [
      ['deepest'], ['deepest'] // 2 arrays nested 4 levels deep
    ],
    [
      [
        ['deepest-est?'] // an array nested 5 levels deep
      ]
    ]
  ]
];
```
尽管此示例看起来有些复杂，但是在处理大量数据时，这种复杂程度并非闻所未闻，甚至不寻常。但是，我们仍然可以非常容易地使用方括号表示法访问此复杂数组的最深层:
```
console.log(nestedArray[2][1][0][0][0]);
// logs: deepest-est?
```
现在我们知道该数据在哪里，如果需要，我们可以将其重置：
```
nestedArray[2][1][0][0][0] = 'deeper still';

console.log(nestedArray[2][1][0][0][0]);
// now logs: deeper still
```

**将键值对添加到JavaScript对象**
从最基本的角度讲，对象只是键值对的集合。换句话说，它们是映射到称为属性（键）的唯一标识符的数据（值）。看一个例子：
```
const tekkenCharacter = {
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true
};
```
上面的代码定义了一个称为kenkenCharacter的Tekken视频游戏角色对象。 它具有三个属性，每个属性都映射到一个特定值。 如果要添加其他属性，例如“ origin”，则可以通过将origin分配给对象来完成：
```
tekkenCharacter.origin = 'South Korea';
```
这使用点表示法。现在tekkenCharacter对象将包含origin属性。也可以通过执行以下操作以方括号符号添加属性：
```
tekkenCharacter['hair color'] = 'dyed orange';
```
如果属性中有空格，或者要使用变量来命名属性，则必须使用方括号表示。 在上述情况下，该属性用引号括起来以将其表示为字符串，并将完全按所示添加。 如果不带引号，它将被视为一个变量，并且属性名称将是该变量的任何值。 这是一个带有变量的示例：
```
const eyes = 'eye color';

tekkenCharacter[eyes] = 'brown';
```
添加所有示例后，该对象将如下所示：
```
{
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true,
  origin: 'South Korea',
  'hair color': 'dyed orange',
  'eye color': 'brown'
};
```

**修改嵌套在对象中的对象**
现在，让我们看一个稍微复杂一点的对象。 对象属性可以嵌套到任意深度，它们的值可以是JavaScript支持的任何类型的数据，包括数组甚至其他对象。 考虑以下：
```
let nestedObject = {
  id: 28802695164,
  date: 'December 31, 2016',
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13,
      busy: 8
    }
  }
```
nestedObject具有三个属性：id（值是数字），日期（值是字符串）和数据（值是具有嵌套结构的对象）。 尽管结构可能很快变得复杂，但是我们仍然可以使用相同的符号来访问所需的信息。 要将值10分配给嵌套onlineStatus对象的busy属性，我们使用点表示法引用该属性：
```
nestedObject.data.onlineStatus.busy = 10;
```

**用括号表示法访问属性名称**
括号表示法非常有用，因为有时对象属性在运行时之前是未知的，或者我们需要以更动态的方式访问它们。
```
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  return foods[scannedItem];
}
console.log(checkInventory("apples"));
```
此代码将评估存储在scannedItem变量中的值（apples），并在foods对象中返回该键的值；如果不存在，则返回undefined。


**使用delete关键字删除对象属性**
简而言之，对象是键值存储，它提供了一种灵活，直观的数据结构方法，并且提供了非常快的查找时间。我们已经添加和修改了对象的键值对。在这里，我们将看到如何从对象中删除键值对。
让我们最后一次回顾一下我们的食品对象示例。 如果我们想删除apples密钥，可以使用如下的delete关键字将其删除：
```
delete foods.apples;
```


**检查对象是否具有属性**
现在我们可以从对象中添加，修改和删除键。 但是，如果我们只是想知道某个对象是否具有特定属性该怎么办？JavaScript为我们提供了两种不同的方法。 一种使用hasOwnProperty（）方法，另一种使用in关键字。 如果我们有一个对象用户，其属性为Alan，则可以通过以下两种方式之一检查其是否存在：
```
users.hasOwnProperty('Alan');
'Alan' in users;
// both return true
```


**使用for ... in语句遍历对象的键**
有时您可能需要遍历对象内的所有键。 这需要JavaScript中称为for ... in语句的特定语法。 对于我们的用户对象，这可能类似于：
```
for (let user in users) {
  console.log(user);
}

// logs:
Alan
Jeff
Sarah
Ryan
```
在此语句中，我们定义了一个变量user，正如您所看到的，该变量在每次迭代过程中都被重置为该对象的每个键，因为该语句在对象中循环，从而将每个用户的名称打印到控制台。 
注意：对象不像数组那样维护存储键的顺序。 因此，在引用或访问键时，键在对象上的位置或其出现的相对顺序就无关紧要。


**使用Object.keys（）生成所有对象键的数组**
我们还可以使用Object.keys（）方法生成一个数组，该数组包含存储在对象中的所有键。传入一个对象作为参数，这将返回一个带有字符串的数组，该字符串表示对象中的每个属性。同样，数组中的条目没有特定的顺序。

现在，您已经了解了JavaScript对象的所有基本操作。您可以添加，修改和删除键值对，检查键是否存在，以及遍历对象中的所有键。随着您继续学习JavaScript，您将看到对象的更多用途。此外，课程“编码面试准备”部分中的“数据结构”课程还涵盖了ES6 Map和Set对象，这两个对象与普通对象相似，但提供了一些附加功能。现在，您已经了解了数组和对象的基础知识，您已经做好充分准备，可以开始使用JavaScript解决更复杂的问题！
















