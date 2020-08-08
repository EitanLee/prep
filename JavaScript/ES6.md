# let const 

    {
        let a = 1;
        var b = 2;
    }
    console.log(a) //undefined
    console.log(b) //2

let 只作用在当前作用域

let const 不能被重复声明

let 不存在变量提升

暂存死区

    let a = 3;
    {
        console.log(a); //undefined
        let a = 6;
    }
    console.log(a); //undefined

const 不可改变的常量,声明的时候必须赋值

常量为引用类型时,可以被修改

    const name = {
        age:14,
        weight:50
    }
    name.age = 20;

    console.log(name) //logs:{age: 20, weight: 50} const存的是地址 改变对象 的属性和值不影响地址

    name={} // Assignment to constant variable. 报错,因为要将name的地址指向新   的对象,name是常量,地址不能更改

怎么防止常量为引用类型的时候可以被修改的情况?
Object.freeze();  可以防止对象被修改

# 解构赋值
解构赋值语法是一种 Javascript 表达式。通过解构赋值, 可以将属性/值从对象/数组中取出,赋值给其他变量。

**数组的解构赋值**

    const arr=[1,2,3,4,5];
    let [a,b,c,d,e] = arr;
    --------------------
    更复杂的匹配
    const arr=[1,2,[3,4,[5]]];
    如果要取到5的值
    let [,,[,,[g]]]=arr; // g>>>5
    --------------------
    剩余运算符 ...
    const arr = [1,2,3,4,5];
    let [a,b,...c] = arr; //a>>>1;b>>>2;c>>>[3,4,5]
    --------------------
    匹配不到的时候返回undefined,如果是undefined，可以返回默认值
    const arr = [1,2,3];
    let [a,b,c,d] =arr; //d>>>undefined
    let[a,b=3,c,d=4] =arr; //b>>>2;d>>>4
    --------------------
    函数返回值
    function ajax(){
        return [
            true,
            {
                name:'xyz',
                age:'13'
            },
            "请求成功"
        ]
    }
    const [a,b,c] = ajax(); //a>>>true;b>>>{name: "xyz", age: "13"};c>>>"请求成功"

**对象的解构赋值**

    const obj = {
        country:'japan',
        location:'asia'
    }
    let {country,location} = obj;

[MDN-解构赋值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

取得对象的属性值

    var {a = 10, b = 5} = {a: 3};

    console.log(a); // 3
    console.log(b); // 5

作为函数参数的对象中取值

    function userId({id}) {
      return id;
    }

    var user = { 
      id: 42, 
      displayName: "jdoe",
      fullName: { 
          firstName: "John",
          lastName: "Doe"
      }
    };

    console.log("userId: " + userId(user)); // "userId: 42"

**字符串的解构赋值**
const str = "This article gets you started with HTML tables";
let [a,b,c] = str; a>>>"T";b>>>"h";c>>>"i"

