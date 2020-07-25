###Array

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