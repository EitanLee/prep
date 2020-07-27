### Algorithm Scripting
---
**转换摄氏到华氏度**
从摄氏温度转换为华氏温度的算法是摄氏温度乘以9/5加上32。
F = C*9/5+32
```
function convertToF(celsius) {
  let fahrenheit=celsius*9/5+32;;
  
  return fahrenheit;
}
convertToF(30); //logs:86
```
---
**反转字符串**
㈠
```
var a = 'abcdef'
console.log(a.split(''))  //["a", "b", "c", "d", "e", "f"]
//split()  将字符串分割成数组  参数来指定以哪种为界限来分割
console.log(a.split('').reverse())  // ["f", "e", "d", "c", "b", "a"]
//reverse()  // 改变数组 将数组中的元素倒序排列
console.log(a.split('').reverse().join(''))  //fedcba
// join() 方法用于把数组中的所有元素放入一个字符串。元素是通过指定的分隔符进行分隔的。
```
㈡
```
var a =['a','b','c','d','e','f'];
var reverseString = function(a) {
        let i=0, j=s.length-1;
    while(i<j){
        [s[i],s[j]] = [s[j],s[i]];   //es6解构赋值
        i++;
        j--;
    }
    return a;
};
```
---

**阶乘**
㈠递归
```
function factorialize(num) {
  if(num<=1){
    return 1
  }else{
    return factorialize(num-1)*num
  }
}
factorialize(5); //logs:120
```

㈡循环
```
function factorialize(num) {
    let i=1,sum=1;
    while(i<=num)
    {
        sum*=i;
        ++i;
    }
    return sum;
}
```


**查找字符串中最长的单词**
```
function findLongestWordLength(str) {
  var arr = str.split(' ');
  var longer = 0;
  for(let i=0;i<arr.length;i++){
    if(arr[i].length>=longer){
       longer=arr[i].length;
    }else{
      longer=longer;
    }
  }
 return longer
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");  //logs:6
```


**返回数组中的最大数字**
```
function largestOfFour(arr) {
  var results = [];
  for (var n = 0; n < arr.length; n++) {
    var largestNumber = arr[n][0];
    for (var sb = 1; sb < arr[n].length; sb++) {
      if (arr[n][sb] > largestNumber) {
        largestNumber = arr[n][sb];
      }
    }

    results[n] = largestNumber;
  }

  return results;
}
```


**确定一个字符串是否在另一个字符串的末尾**
```
function confirmEnding(str, target) {
		return str.substring(str.length-target.length) === target;
}

confirmEnding("Bastian", "n"); //logs:true
```


**截断字符串**
㈠
自己的解法
```
function truncateString(str, num) {
  var newStr = [];
  var oldStr =str.split('');
  let n=0;
  if(str.length<=num){
    newStr = str.split('');
  }else{
  while(n<num){
    newStr[n]=oldStr[n];
    n++;
  };
  newStr.push('...');
  }
  return newStr.join('');
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
```
㈡
官方的解法1：
```
function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}
```
官方的解法2：（解法1的三元运算符表示）
```
function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}
```


**Finders Keepers**
创建一个通过数组arr查看并返回通过“truth test”的第一个元素的函数。这意味着给定元素x，如果func（x）为true，则通过“truth test”。如果没有元素通过测试，则返回undefined。
```
function findElement(arr, func) {
  let num = 0;
    for (var i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }

  return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);//logs:2
```


**Boo Who**
检查值是否归类为布尔基元。返回true或false。
```
function booWho(bool) {
  return typeof bool === "boolean";
}

booWho(null);//logs:false
```


**首字母大写**
返回提供的字符串，每个单词的首字母大写。确保单词的其余部分为小写。
```
function titleCase(str) {
  let senTenSe=str.toLowerCase().split(" "); //整句转化为小写，然后转换为数组
  let newSen=[];
  for(let i=0;i<senTenSe.length;i++){
      var e=senTenSe[i];
     newSen[i]=e.replace(e.charAt(0), e.charAt(0).toUpperCase());//将每个元素的首字母替换为大写
  }
  return newSen.join(" ");
}

titleCase("I'm a little tea pot");
```


**Slice and Splice**
```
您将获得两个数组和一个索引。按索引将第一个数组的每个元素复制到第二个数组。从第二个数组的索引n处插入元素。返回结果数组。 函数运行后，第二个数组应保持不变。
function frankenSplice(arr1, arr2, n) {
  let old = [...arr2];
  old.splice(n,0,...arr1);
  return old;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
```


**Falsy Bouncer**
从数组中删除所有虚假值,JavaScript中的伪造值为false，null，0，“”，undefined和NaN。提示：尝试将每个值转换为布尔值。
```
function bouncer(arr) {
  var newArr=[];
  for(let i=0;i<arr.length;i++){
    if(Boolean(arr[i])==true){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

bouncer([7, "ate", "", false, 9]);
```

**Where do I Belong**
返回将值（第二个参数）排序后应插入数组（第一个参数）的最低索引。 返回的值应该是一个数字。例如，getIndexToIns（[1,2,3,4]，1.5）应该返回1，因为它大于1（索引0）但小于2（索引1）。同样，getIndexToIns（[20,3,5]，19）应该返回2，因为一旦对数组进行排序，它将看起来像[3,5,20]，而19小于20（索引2）且大于5（ 索引1）。
```
function getIndexToIns(arr, num) {
  arr.sort(function(a, b) {
    return a - b;
  });
  for (var a = 0; a < arr.length; a++) {
    if (arr[a] >= num) return a;
  }
  return arr.length;
}

getIndexToIns([1,2,3], 5);
```

**Mutations**
如果数组第一个元素中的字符串包含数组第二个元素中字符串的所有字母，则返回true。例如，[“ hello”，“ Hello”]应该返回true，因为第二个字符串中的所有字母都出现在第一个字符串中，忽略大小写。参数[“ hello”，“ hey”]应该返回false，因为字符串“ hello”不包含“ y”。最后，[“ ALIEN”，“ line”]应该返回true，因为“ line”中的所有字母都出现在“ Alien”中。
㈠
自己的解法
```
function mutation(arr) {
  var y = arr[0].toLowerCase().split('');
  var x =arr[1].toLowerCase().split('');
  for(let i=0;i<x.length;i++){
    if(y.indexOf(x[i])==-1){
      return false;
    }
  }
  return true;
}

mutation(["Hello", "hey"]);
```

㈡
官方的解法
```
function mutation(arr) {
  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();
  for (var i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}
```
**Chunky Monkey**
编写一个将数组（第一个参数）分成大小（第二个参数）长度的组并将其作为二维数组返回的函数。
```
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var arr2 = [];
  for (var i = 0; i < arr.length; i += size) {
    arr2.push(arr.slice(i, i + size));
  }
  return arr2;
}
```







































































