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


