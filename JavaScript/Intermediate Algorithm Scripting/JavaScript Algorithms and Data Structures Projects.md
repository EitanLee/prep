###简单的js算法

**1、回文判断**
如果给定的字符串是回文，则返回true。 否则，返回false。

回文是指向前或向后以相同方式拼写的单词或句子，而忽略了标点，大小写和空格。

注意
您需要删除所有非字母数字字符（标点符号，空格和符号），并将所有内容都变成相同的大小写（小写或大写），以检查回文。

我们将传递各种格式的字符串，例如“ racecar”，“ RaceCar”和“ race CAR”。

我们还将传递带有特殊符号的字符串，例如“ 2A3 * 3a2”，“ 2A3 3a2”和“ 2_A3 * 3＃A2”。

双指针的方法
```
function palindrome(str) {
  str = str.toLowerCase().replace(/[\W_]/g, "");
  for (var i = 0, len = str.length - 1; i < len / 2; i++) {
    if (str[i] !== str[len - i]) {
      return false;
    }
  }
  return true;
}
palindrome("_eye");
```
**2、罗马数字转换器**
将给定数字转换为罗马数字。 所有罗马数字答案均应以大写形式提供。
```
var convertToRoman = function(num) {
  var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanNumeral = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
  ];

  var romanized = "";

  for (var index = 0; index < decimalValue.length; index++) {
    while (decimalValue[index] <= num) {
      romanized += romanNumeral[index];
      num -= decimalValue[index];
    }
  }

  return romanized;
};

// test here
convertToRoman(36);
```

**3、凯撒密码**
最简单和最广为人知的密码之一是凯撒密码，也称为移位密码。 在移位密码中，字母的含义会移位一定的数量。

ROT13密码是现代常见的用法，其中字母的值偏移了13个位。 因此，“ A”↔“ N”，“ B”↔“ O”等。

编写一个函数，该函数将ROT13编码的字符串作为输入并返回解码的字符串。

所有字母均为大写。 不要转换任何非字母字符（即空格，标点符号），但要继续传递它们。