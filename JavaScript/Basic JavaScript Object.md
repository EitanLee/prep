### Basic JavaScript Object

想想人们每天看到的东西，例如汽车，商店和鸟类。 这些都是对象：人们可以观察并与之互动的有形事物。
这些物品有哪些特质？ 汽车有轮子。 商店出售物品。 鸟有翅膀。
这些品质或属性定义了组成对象的内容。 请注意，相似的对象共享相同的属性，但这些属性可能具有不同的值。 例如，所有汽车都有车轮，但并非所有汽车都有相同数量的车轮。
JavaScript中的对象用于对现实世界的对象进行建模，使其具有与现实世界中的对象相同的属性和行为。 这是使用这些概念创建对象的示例：鸭子
```
let duck = {
  name: "Aflac",
  numLegs: 2
};
```
**使用点表示法访问对象的属性**
```
let duck = {
  name: "Aflac",
  numLegs: 2
};
console.log(duck.name);
// This prints "Aflac" to the console
```
在对象名称“ duck”上使用点符号，后跟属性名称“ name”，以访问“ Aflac”的值。

**在对象上创建方法**
对象可以具有一种称为方法的特殊类型的属性。 方法是作为函数的属性。这为对象添加了不同的行为。这是带有方法的鸭子示例：
```
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + duck.name + ".";}
};
duck.sayName();
// Returns "The name of this duck is Aflac."
```
该示例添加了sayName方法，该方法返回一个给出鸭子名称的句子。 注意，该方法使用duck.name访问了return语句中的name属性。 下一个挑战将涵盖实现此目标的另一种方法。

**使用this关键字使代码可重用**
最后一个挑战为鸭子对象引入了一种方法。 它使用duck.name点表示法在return语句中访问name属性的值：
```
sayName: function() {return "The name of this duck is " + duck.name + ".";}
```
虽然这是访问对象属性的有效方法，但这里有一个陷阱。 如果变量名称更改，则引用原始名称的任何代码也将需要更新。 在简短的对象定义中，这不是问题，但是，如果对象具有对其属性的许多引用，则出错的可能性更大。

避免这些问题的一种方法是使用this关键字：
```
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + this.name + ".";}
};
```
这是一个很深的主题，上面的示例只是使用它的一种方法。在当前上下文中，这是指与该方法关联的对象：duck。如果对象的名称更改为绿头鸭，则无需在代码中找到所有关于duck的引用。它使代码可重用且更易于阅读。


**定义构造函数**
构造函数是创建新对象的函数。 它们定义了属于新对象的属性和行为。 可以将它们视为创建新对象的蓝图。

这是构造函数的示例：
```
function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}
```
此构造函数定义一个Bird对象，其属性名称，颜色和numLegs分别设置为Albert，blue和2。 构造函数遵循一些约定：

用大写的名称定义构造函数，以将其与不是构造函数的其他函数区分开。
构造函数使用关键字this设置将创建的对象的属性。 在构造函数内部，这是指它将创建的新对象。
构造函数定义属性和行为，而不是像其他函数那样返回值。

**使用构造函数创建对象**
```
function Bird() {
  this.name = "Albert";
  this.color  = "blue";
  this.numLegs = 2;
  // "this" inside the constructor always refers to the object being created
}

let blueBird = new Bird();
```
请注意，在调用构造函数时将使用new运算符。 这告诉JavaScript创建一个名为blueBird的Bird的新实例。 如果没有new运算符，则构造函数中的该对象将不会指向新创建的对象，从而导致意外的结果。 现在，blueBird具有在Bird构造函数中定义的所有属性

**扩展构造函数以接收参数**
上一个挑战的“鸟和狗”构造函数运行良好。但是，请注意，使用Bird构造函数创建的所有Birds会自动命名为Albert，颜色为蓝色，并且有两条腿。如果您想让鸟类的名字和颜色使用不同的值怎么办？可以手动更改每只鸟的属性，但这将需要很多工作：
```
let swan = new Bird();
swan.name = "Carlos";
swan.color = "white";
```
假设您正在编写一个程序来跟踪一个鸟舍中数百甚至数千只不同的鸟类。创建所有鸟类需要花费大量时间，然后将每个鸟类的属性更改为不同的值。为了更轻松地创建不同的Bird对象，可以将Bird构造函数设计为接受参数：
```
function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}
```
然后将值作为参数传递，以将每个唯一的Bird定义到Bird构造函数中：let cardinal = new Bird（“ Bruce”，“ red”）;这提供了一个新的Bird实例，其名称和颜色属性分别设置为Bruce和red。 numLegs属性仍设置为2。主要函数具有以下属性：
```
cardinal.name // => Bruce
cardinal.color // => red
cardinal.numLegs // => 2
```
构造函数更加灵活。现在可以在创建每个Bird时定义它们的属性，这是JavaScript构造函数如此有用的一种方式。他们基于共享的特征和行为将对象分组在一起，并定义了一个自动化其创建的蓝图。

**使用instanceof验证对象的构造方法**
每当构造函数创建一个新对象时，该对象即被视为其构造函数的实例。 JavaScript提供了一种方便的方法来使用instanceof运算符进行验证。 instanceof允许您将对象与构造函数进行比较，根据该对象是否使用构造函数创建而返回true或false。 这是一个例子：
```
let Bird = function(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

let crow = new Bird("Alexis", "black");

crow instanceof Bird; // => true
```
如果在不使用构造函数的情况下创建对象，instanceof将验证它不是该构造函数的实例：
```
let canary = {
  name: "Mildred",
  color: "Yellow",
  numLegs: 2
};
```

**了解自己的属性**
在以下示例中，Bird构造函数定义了两个属性：name和numLegs：
```
function Bird(name) {
  this.name  = name;
  this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");
```
name和numLegs称为自己的属性，因为它们直接在实例对象上定义。 这意味着鸭子和金丝雀分别具有这些属性的单独副本。 实际上，Bird的每个实例都将拥有这些属性的副本。 以下代码将duck的所有自身属性添加到数组ownProps中：
```
let ownProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps); // prints [ "name", "numLegs" ]
```

**使用原型属性减少重复代码**
由于numLegs对于Bird的所有实例都可能具有相同的值，因此从本质上讲，每个Bird实例内部都有一个重复的变量numLegs。
当只有两个实例时，这可能不是问题，但请想象是否有数百万个实例。 那将是很多重复的变量。
更好的方法是使用Bird的原型。 原型中的属性在Bird的所有实例之间共享。 这是将numLegs添加到Bird原型的方法：
```
Bird.prototype.numLegs = 2;
```
现在，Bird的所有实例都具有numLegs属性。
```
console.log（duck.numLegs）; //打印2
console.log（canary.numLegs）; //打印2
```
由于所有实例都自动具有原型上的属性，因此可以将原型视为创建对象的“配方”。 请注意，鸭子和金丝雀的原型是Bird构造函数的一部分，名为Bird.prototype。 JavaScript中几乎每个对象都有一个原型属性，该属性是创建它的构造函数的一部分。


**遍历所有属性**
您现在已经看到了两种属性：自己的属性和原型属性。 自己的属性直接在对象实例本身上定义。原型属性在原型上定义。
```
function Bird(name) {
  this.name = name;  //own property
}

Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird("Donald");
```
下面是将鸭子自身的属性添加到数组ownProps以及将原型属性添加到数组prototypeProps的方法：
```
let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps); // prints ["name"]
console.log(prototypeProps); // prints ["numLegs"]
```

**了解构造函数属性**
在先前挑战中创建的对象实例duck和beagle上有一个特殊的constructor属性：
```
let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor === Bird);  //prints true
console.log(beagle.constructor === Dog);  //prints true
```
请注意，constructor属性是对创建实例的构造函数的引用。 constructor属性的优点是可以检查该属性以找出它是哪种对象。这是如何使用此示例：
```
function joinBirdFraternity(candidate) {
  if (candidate.constructor === Bird) {
    return true;
  } else {
    return false;
  }
}
```
注意：
由于构造函数属性可以被覆盖（在接下来的两个挑战中将会介绍），因此通常最好使用instanceof方法来检查对象的类型。

**将原型更改为新对象**
到目前为止，您一直在分别向原型添加属性：
```
Bird.prototype.numLegs = 2;
```
经过多个属性后，这变得乏味。
```
Bird.prototype.eat = function（）{
   console.log（“ nom nom nom”）;
}

Bird.prototype.describe = function（）{
   console.log（“我的名字是” + this.name）;
}
```
一种更有效的方法是将原型设置为已经包含属性的新对象。 这样，就可以一次添加所有属性：
```
Bird.prototype = {
  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

**记住在更改原型时设置构造函数属性**
手动将原型设置为新对象有一个关键的副作用。 它擦除了构造函数的属性！ 此属性可用于检查哪个构造函数创建了实例，但是由于该属性已被覆盖，因此现在给出错误的结果：
```
duck.constructor === Bird; // false -- Oops
duck.constructor === Object; // true, all objects inherit from Object.prototype
duck instanceof Bird; // true, still works
```
要解决此问题，每当将原型手动设置为新对象时，请记住设置constructor属性：
```
Bird.prototype = {
  constructor: Bird, // 定义构造函数属性
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name); 
  }
};
```

**了解对象的原型来自何处**
就像人们从父母那里继承基因一样，对象直接从创建它的构造函数中继承其原型。 例如，这里的Bird构造函数创建了duck对象：
```
function Bird(name) {
  this.name = name;
}

let duck = new Bird("Donald");
```
duck从Bird构造函数继承其原型。 您可以使用isPrototypeOf方法显示此关系：
```
Bird.prototype.isPrototypeOf（duck）;
//返回true
```


**了解原型链**
JavaScript中的所有对象（有一些例外）都有一个原型。 另外，对象的原型本身就是对象。
```
function Bird(name) {
  this.name = name;
}
typeof(Bird.prototype); // 返回 'object'
```
因为原型是对象，所以原型可以有自己的原型！ 在这种情况下，Bird.prototype的原型为Object.prototype：
```
Object.prototype.isPrototypeOf(Bird.prototype); // returns true
```
这有什么用？ 您可能会回忆起先前的挑战中的hasOwnProperty方法：
```
let duck = new Bird("Donald");
duck.hasOwnProperty("name"); // 返回 true
```
hasOwnProperty方法在Object.prototype中定义，可以通过Bird.prototype访问，然后可以通过duck访问。 这是原型链的一个例子。 在此原型链中，Bird是duck的超类型，而duck是子类型。 对象是Bird和duck的超类型。 对象还是JavaScript中所有对象的超类型。 因此，任何对象都可以使用hasOwnProperty方法。


**使用继承，这样您就不会重复**
编程中有一个原则叫“Don't Repeat Yourself ”（DRY）。 重复代码成为问题的原因是，任何更改都需要在多个位置固定代码。 这通常意味着程序员需要做更多的工作，并且有更多的出错空间。
请注意，在下面的示例中，describe方法由Bird and Dog共享：
```
Bird.prototype = {
  constructor: Bird,
  describe: function() {
    console.log("My name is " + this.name);
  }
};

Dog.prototype = {
  constructor: Dog,
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```
describe方法在两个地方重复。 通过创建称为动物的超类型（或父代），可以对代码进行编辑以遵循DRY原则：
```
function Animal() { };

Animal.prototype = {
  constructor: Animal, 
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```
由于Animal包含describe方法，因此可以将其从Bird and Dog中删除：
```
Bird.prototype = {
  constructor: Bird
};

Dog.prototype = {
  constructor: Dog
};
```


**从超类型继承行为**
创建了一个名为Animal的超类型，该超类型定义了所有动物共有的行为：
```
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
```
这个和下一个挑战将涉及如何在“鸟和狗”内部重用Animal的方法而无需再次定义它们。 它使用一种称为继承的技术。 这个挑战涵盖了第一步：创建超类型（或父类型）的实例。 您已经知道使用new运算符创建Animal实例的一种方法：
```
let animal = new Animal();
```
使用此语法进行继承时，存在一些缺点，这些缺点对于此挑战的范围而言太复杂了。 相反，这是一种没有这些缺点的替代方法：
```
let animal = Object.create(Animal.prototype);
```
Object.create（obj）创建一个新对象，并将obj设置为新对象的原型。 回想一下，原型就像创建对象的“配方”。 通过将动物的原型设置为动物的原型，可以有效地赋予动物实例与其他任何动物实例相同的“配方”。
```
animal.eat(); // prints "nom nom nom"
animal instanceof Animal; // => true
```
**Set the Child's Prototype to an Instance of the Parent**
在上一个挑战中，您看到了从超类型（或父）Animal继承行为的第一步：制作Animal的新实例。
这项挑战涉及下一步：将子类型（或子类型）（在本例中为Bird）的原型设置为Animal的实例。
```
Bird.prototype = Object.create(Animal.prototype);
```
请记住，原型就像创建对象的“配方”。在某种程度上，Bird的配方现在包含了Animal的所有关键“成分”。
```
let duck = new Bird("Donald");
duck.eat(); // prints "nom nom nom"
```
duck继承了Animal的所有属性，包括eat方法。综合示例
```
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();
```

**改回继承的constructor属性**
当一个对象从另一个对象继承其原型时，它还将继承超类型的构造函数属性。 这是一个例子：
```
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor // function Animal(){...}
```
但是鸭子和Bird的所有实例都应表明它们是由Bird而非Animal构造的。为此，您可以手动将Bird的构造函数属性设置为Bird对象：
```
Bird.prototype.constructor = Bird;
duck.constructor // function Bird(){...}
```

**继承后添加方法**
从超类型构造函数继承其原型对象的构造函数除了继承的方法外，还可以拥有自己的方法。
例如，Bird是一个从Animal继承其原型的构造函数：
```
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
```
除了从Animal继承的内容外，您还想添加Bird对象唯一的行为。 在这里，Bird将获得fly（）函数。 函数以与任何构造函数相同的方式添加到Bird的原型中：
```
Bird.prototype.fly = function() {
  console.log("I'm flying!");
};
```
现在，Bird实例将同时具有eat（）和fly（）方法：
```
let duck = new Bird();
duck.eat(); // prints "nom nom nom"
duck.fly(); // prints "I'm flying!"
```

**重写继承的方法**
在先前的课程中，您了解了一个对象可以通过引用其原型对象来从另一个对象继承其行为（方法）：

```
ChildObject.prototype = Object.create（ParentObject.prototype）
```

然后，ChildObject通过将其链接到其原型上来接收自己的方法：

```
ChildObject.prototype.methodName = function（）{...};
```
可以重写继承的方法。这样做的方法相同-通过使用与要覆盖的方法名称相同的方法名称将方法添加到ChildObject.prototype。这是Bird覆盖从Animal继承的eat（）方法的示例：
```
function Animal() { }
Animal.prototype.eat = function() {
  return "nom nom nom";
};
function Bird() { }

// Inherit all methods from Animal
Bird.prototype = Object.create(Animal.prototype);

// Bird.eat() overrides Animal.eat()
Bird.prototype.eat = function() {
  return "peck peck peck";
};
```

如果创建一个实例对象，let duck = new Bird（）;然后调用duck.eat（），下面是JavaScript在duck的原型链上寻找eat方法的过程：
duck =>在这里定义了eat（）吗？没有。
Bird =>在这里定义了eat（）吗？ =>是的。执行它并停止搜索。
Animal => eat()在Animal也定义了，但是JavaScript在达到此级别之前已停止搜索。
Object => JavaScript在达到此级别之前已停止搜索。

**使用Mixin在不相关的对象之间添加常见行为**
如您所见，行为是通过继承共享的。 但是，在某些情况下，继承不是最佳解决方案。 对于不相关的对象（例如Bird和Airplane），继承不能很好地工作。 它们都可以飞行，但是鸟不是飞机的类型，反之亦然。

对于不相关的对象，最好使用mixins。 mixin允许其他对象使用功能集合。
```
let flyMixin = function(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  }
};
```
flyMixin接受任何对象并为其提供fly方法。
```
let bird = {
  name: "Donald",
  numLegs: 2
};

let plane = {
  model: "777",
  numPassengers: 524
};

flyMixin(bird);
flyMixin(plane);
```
在这里，将鸟和飞机传递给flyMixin，flyMixin然后将fly功能分配给每个对象。现在鸟和飞机都可以飞：
```
bird.fly(); // prints "Flying, wooosh!"
plane.fly(); // prints "Flying, wooosh!"
```
请注意，mixin如何允许相同的飞行方法被无关的物体鸟和飞机重用。

**使用闭包保护对象内的属性免于外部修改**
在上一个挑战中，bird有一个公共财产名称。之所以被认为是公共的，是因为它可以在鸟的定义之外进行访问和更改。
```
bird.name = "Duffy";
```
因此，代码的任何部分都可以轻松地将bird的名称更改为任何值。考虑一下诸如密码和银行帐户之类的事情，您可以在代码库的任何部分轻松地对其进行更改。这可能会导致很多问题。

使此公共属性私有的最简单方法是在构造函数中创建一个变量。这会将变量的范围更改为在构造函数内，而不是全局可用的。这样，变量只能由构造函数中的方法访问和更改。
```
function Bird() {
  let hatchedEgg = 10; // private variable

  /* Bird对象可以使用的公开可用方法 */
  this.getHatchedEggCount = function() { 
    return hatchedEgg;
  };
}
let ducky = new Bird();
ducky.getHatchedEggCount(); // returns 10
```
这里的getHatchedEggCount是特权方法，因为它可以访问私有变量hatchedEgg。这是可能的，因为hatchedEgg在与getHatchedEggCount相同的上下文中声明。在JavaScript中，函数始终有权访问创建它的上下文。这称为闭包。

**了解立即调用的函数表达式（IIFE）**
JavaScript中的一种常见模式是在声明函数后立即执行该函数：
```
(function () {
  console.log("Chirp, chirp!");
})(); // this is an anonymous function expression that executes right away
// Outputs "Chirp, chirp!" immediately
```
请注意，该函数没有名称，也不存储在变量中。 函数表达式末尾的两个括号（）使其立即被执行或调用。 这种模式称为立即调用的函数表达式或IIFE。

**使用IIFE创建模块**
立即调用的函数表达式（IIFE）通常用于将相关功能分组为单个对象或模块。例如，一个较早的挑战定义了两个mixin函数：
```
function glideMixin(obj) {
  obj.glide = function() {
    console.log("Gliding on the water");
  };
}
function flyMixin(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  };
}
```
我们可以将这些mixin分为以下模块：我们可以将这些mixin分为以下模块：
```
let motionModule = (function () {
  return {
    glideMixin: function(obj) {
      obj.glide = function() {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      };
    }
  }
})(); // The two parentheses cause the function to be immediately invoked
```
请注意，您有一个立即调用的函数表达式（IIFE），该函数表达式返回一个对象motionModule。 返回的对象包含所有mixin行为作为对象的属性。 模块模式的优点在于，所有运动行为都可以打包到一个对象中，然后可以由代码的其他部分使用。 这是一个使用它的示例：
```
motionModule.glideMixin(duck);
duck.glide();
```



















