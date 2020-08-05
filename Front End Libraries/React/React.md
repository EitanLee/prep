# React

由Facebook创建的React是用于构建用户界面的开源JavaScript库。 它用于创建组件，处理状态和道具，利用事件侦听器和某些生命周期方法在数据更改时进行更新。

React将HTML与JavaScript功能结合在一起，以创建自己的标记语言JSX。 本节将向您介绍所有这些概念，以及如何将其实现以用于您自己的项目。

创建一个简单的JSX元素
简介：React是Facebook创建和维护的一个开源视图库。这是呈现现代Web应用程序的用户界面（UI）的绝佳工具。

React使用称为JSX的JavaScript语法扩展，可让您直接在JavaScript中编写HTML。这有几个好处。它使您可以在HTML中使用JavaScript的全部编程功能，并有助于保持代码的可读性。在大多数情况下，JSX与您已经学习的HTML相似，但是在这些挑战中将涵盖一些关键差异。

例如，由于JSX是JavaScript的语法扩展，因此您实际上可以直接在JSX中编写JavaScript。为此，您只需在大括号内包含要被视为JavaScript的代码：{'这被视为JavaScript代码'}。请记住这一点，因为它已在未来的一些挑战中使用。

但是，由于JSX不是有效的JavaScript，因此必须将JSX代码编译为JavaScript。 Transpiler Babel是用于此过程的流行工具。为了您的方便，这些挑战已经在幕后添加了。如果您碰巧编写了语法无效的JSX，您将看到这些挑战中的第一个测试失败。

值得注意的是，在幕后挑战是调用ReactDOM.render（JSX，document.getElementById（'root'））。这个函数调用将您的JSX放入React自己的DOM的轻量表示中。然后，React使用其自己的DOM的快照来优化仅更新实际DOM的特定部分。























