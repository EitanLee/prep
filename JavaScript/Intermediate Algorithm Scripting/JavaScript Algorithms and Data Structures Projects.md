###简单的js算法

1、回文判断
如果给定的字符串是回文，则返回true。 否则，返回false。

回文是指向前或向后以相同方式拼写的单词或句子，而忽略了标点，大小写和空格。

注意
您需要删除所有非字母数字字符（标点符号，空格和符号），并将所有内容都变成相同的大小写（小写或大写），以检查回文。

我们将传递各种格式的字符串，例如“ racecar”，“ RaceCar”和“ race CAR”。

我们还将传递带有特殊符号的字符串，例如“ 2A3 * 3a2”，“ 2A3 3a2”和“ 2_A3 * 3＃A2”。
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