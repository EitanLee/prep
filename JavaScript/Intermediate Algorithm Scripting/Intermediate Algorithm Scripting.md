
**对范围内的所有数字求和**
我们将为您传递两个数字组成的数组。 返回这两个数字的总和加上它们之间所有数字的总和。 最低的数字不一定总是排在最前面。

例如，sumAll（[4,1]）应该返回10，因为1到4之间（包括两端）的所有数字之和为10。

㈠自己的解答
```
function sumAll(arr) {
    if(arr[0]<arr[1]){
    let a = arr[1]-arr[0]+1;
   
    return (arr[0]+arr[1])*a/2; 
    }else if(arr[0]>arr[1]){
    let a = arr[0]-arr[1]+1;
    return (arr[0]+arr[1])*a/2; 
    }
}
sumAll([4, 1]);
```
㈡for循环
```
function sumAll(arr) {
  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);
  var temp = 0;
  for (var i = min; i <= max; i++) {
    temp += i;
  }
  return temp;
}

sumAll([1, 4]);
```
㈢我的解法的另一个版本
```
const sumAll = arr => {
  // Buckle up everything to one!
  const startNum = arr[0];
  const endNum = arr[1];

  // Get the count of numbers between the two numbers by subtracting them and add 1 to the absolute value.
  // ex. There are |1-4| + 1 = 4, (1, 2, 3, 4), 4 numbers between 1 and 4.
  const numCount = Math.abs(startNum - endNum) + 1;

  // Using Arithmetic Progression summing formula
  const sum = ((startNum + endNum) * numCount) / 2;
  return sum;
};
```
㈣和解法2一样
```
function sumAll(arr) {
  var sum = 0;
  for (var i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sum += i;
  }
  return sum;
}

sumAll([1, 4]);
```
㈤递归的方法
```
function sumAll([ first, last ] ) {
 const step = first - last < 0 ? 1 : -1;
 return first !== last
   ? first + sumAll([ first + step, last ])
   : first;
}
```
**区分两个数组**
比较两个数组，并返回一个新数组，其中包含仅在两个给定数组之一中找到的所有项目，但不能同时在两个数组中找到。 换句话说，返回两个数组的对称差。

注意
您可以以任何顺序返回数组及其元素。
㈠自己的解法，两个循环遍历数组，indexOf方法找差异
```
function diffArray(arr1, arr2) {
  var newArr = [];
  for(let i=0;i<arr1.length;i++){
    if(arr2.indexOf(arr1[i])==-1){
      newArr.push(arr1[i]);
    }
  }
  
  for(let i=0;i<arr2.length;i++){
    if(arr1.indexOf(arr2[i])==-1){
      newArr.push(arr2[i]);
    }
  }
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
```
㈡include（）方法
```
function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
```
㈢剩余运算符
```
function diffArray(arr1, arr2) {
  return [...diff(arr1, arr2), ...diff(arr2, arr1)];

  function diff(a, b) {
    return a.filter(item => b.indexOf(item) === -1);
  }
}
```
---
**Seek and Destroy**

您将获得一个初始数组（destroyer函数中的第一个参数），后跟一个或多个参数。 从初始数组中删除与这些参数具有相同值的所有元素。

注意
您必须使用arguments对象。
```
function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < args.length; j++) {
      if (arr[i] === args[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(Boolean);//去掉delete留下的空白值
}
```
---
**Wherefore art thou**
使一个函数遍历对象数组（第一个参数）并返回具有匹配的名称和值对的所有对象的数组（第二个参数）。 如果要将源对象的每个名称和值对包含在返回的数组中，则该对象必须存在于集合的对象中。

例如，如果第一个参数是[{first：“ Romeo”，last：“ Montague”}，{first：“ Mercutio”，last：null}，{first：“ Tybalt”，last：“ Capulet”}]， 并且第二个参数是{last：“ Capulet”}，则必须从数组中返回第三个对象（第一个参数），因为它包含名称和其值，该对象作为第二个参数传递。
```
function whatIsInAName(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  var srcKeys = Object.keys(source);

  return collection.filter(function(obj) {
    return srcKeys.every(function(key) {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
}

// test here
whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
);
```
































