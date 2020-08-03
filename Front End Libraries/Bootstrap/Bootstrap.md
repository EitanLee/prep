# Bootstrap

Bootstrap是用于设计响应式网页和Web应用程序的前端框架。 它采用移动优先的方法进行Web开发。 Bootstrap包括预构建的CSS样式和类，以及一些JavaScript功能。 Bootstrap使用响应式12列网格布局，并具有以下设计模板：
buttons
images
tables
forms
navigation
要了解有关它的更多信息以及如何在项目中包含Bootstrap，请访问[Bootstrap]('https://getbootstrap.com/')

**将响应式设计与Bootstrap流体容器配合使用**

在freeCodeCamp的HTML5和CSS部分中，我们构建了Cat Photo App。现在让我们回到它。这次，我们将使用流行的Bootstrap响应式CSS框架设置样式。

Bootstrap会找出屏幕的宽度，并通过调整HTML元素的大小进行响应-因此采用了名称响应式设计。

使用响应式设计，无需设计网站的移动版本。在具有任何宽度的屏幕的设备上看起来都不错。

您可以通过将以下代码添加到HTML顶部来将Bootstrap添加到任何应用程序：

~~~
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
~~~

在这种情况下，我们已经为您在后台将此页面添加了它。请注意，可以使用>或/>关闭链接标记。


**使图像移动自适应**

首先，在现有图像下方添加一个新图像。 将其src属性设置为https://bit.ly/fcc-running-cats。

如果此图像可以恰好是我们手机屏幕的宽度，那就太好了。

幸运的是，使用Bootstrap，我们所需要做的就是将名为img-responsive的class添加到您的图像中。 这样做，图像就能完全适合您的页面宽度。

**中心文本(center text)**

现在我们正在使用Bootstrap，我们可以将标题元素居中以使其看起来更好。 我们需要做的就是将class='text-center'添加到h2元素中。

请记住，您可以通过用空格分隔每个类来将多个类添加到同一元素，如下所示：
~~~
<h2 class="red-text text-center">your text</h2>
~~~

**创建一个Bootstrap按钮**
Bootstrap具有自己的button元素样式，这些样式比纯HTML样式好得多。

**创建一个块元素的Bootstrap按钮**

通常，具有btn和btn-default类的按钮元素仅与它们包含的文本一样宽。 例如：
~~~
<button class =“ btn btn-default”>提交</ button>
~~~

此按钮的宽度仅与单词“提交”一样宽。

通过使用btn-block的class使它们成为块元素，您的按钮将伸展以填充页面的整个水平空间，其后的所有元素都将流到该块下面的“新行”。
~~~
<button class =“ btn btn-default btn-block”>提交</ button>
~~~

此按钮将占用可用宽度的100％。


请注意，这些按钮仍需要btn的class。

**尝试Bootstrap按钮的颜色Rainbow**

btn-primary的class是您将在应用程序中使用的主要颜色。 这对于突出显示您希望用户执行的操作很有用。

用按钮中的btn-primary替换Bootstrap的btn-default类。

请注意，此按钮仍将需要btn和btn-block类。
~~~
<button type="submit" class="btn btn-block btn-primary">Submit</button>
~~~

**使用btn-info调出可选动作**

Bootstrap带有几种按钮的预定义颜色。 btn-info类用于引起用户对可以执行的可选操作的注意。

在“ Like”按钮下方，使用名称“Info”创建一个新的块级Bootstrap按钮，并向其中添加Bootstrap的btn-info和btn-block类。

请注意，这些按钮仍需要btn和btn-block类。
~~~
<button class="btn btn-info btn-block">Info</button>
~~~

**使用btn-danger警告您的用户是危险动作(如删除)**

Bootstrap带有几种按钮的预定义颜色。 btn-danger类是用于通知用户按钮执行破坏性操作（如删除猫照片）的按钮颜色。

创建一个带有文本“ Delete”的按钮，并将其赋予btn-danger类。

请注意，这些按钮仍需要btn和btn-block类。
~~~
<button class="btn btn-block btn-danger">Delete</button>
~~~

**使用Bootstrap网格(grid)并排放置元素**

Bootstrap使用响应式12列网格系统，可以轻松地将元素放入行并指定每个元素的相对宽度。Bootstrap的大多数类都可以应用于div元素。

Bootstrap具有不同的列宽属性，取决于用户屏幕的宽度。例如，电话的屏幕较窄，而笔记本电脑的屏幕较宽。

以Bootstrap的col-md-* 类为例。在这里，md表示medium(中间)，而*是一个数字，指定元素应该有多少列宽。在这种情况下，将指定中型屏幕（例如笔记本电脑）上元素的列宽。

在我们正在构建的Cat Photo App中，我们将使用col-xs- *，其中xs表示特别小（例如超小手机屏幕），而*是列数，指定宽达多少列元素应该是。

并排放置“喜欢”，“信息”和“删除”按钮，方法是将所有三个按钮嵌套在一个<div class =“row”>元素内，然后将它们分别嵌套在<div class =“col-xs-4”>元素内。

row类应用于div，按钮本身可以嵌套在div中。
~~~
  <div class="row">
    <div class="col-xs-4">
        <button class="btn btn-block btn-primary">Like</button>
    </div><div class="col-xs-4">
        <button class="btn btn-block btn-info">Info</button>
    </div><div class="col-xs-4">
        <button class="btn btn-block btn-danger">Delete</button></div>
    </div>
    </div>
~~~

**用 Bootstrap 内置的样式自定义样式**

通过使用Bootstrap的内置样式而不是我们先前创建的自定义样式，我们可以清理代码并使Cat Photo App看起来更传统。

**使用span标签来定位内联元素**

您可以使用span来创建内联元素。 还记得我们使用btn-block类使按钮填充整个行吗？

这说明了“内联”元素和“块”元素之间的区别。

通过使用内联span元素，可以将多个元素放在同一行上，甚至可以对同一行的不同部分设置不同的样式。

将“love”一词嵌套在span元素下面的“Things cats love”元素中。然后给那个span的class="text-danger"使其变成红色。

这是使用“猫讨厌的三件事”来完成此操作的方法：
~~~
<p>Top 3 things cats <span class="text-danger">hate:</span></p>
~~~

**创建自定义标题**

通过将标题和令人放松的猫图像放在同一行中，我们将为Cat Photo App创建一个简单的标题。

记住，Bootstrap使用响应式网格系统，该系统使将元素放入行并指定每个元素的相对宽度变得容易。 Bootstrap的大多数类都可以应用于div元素。

将第一个图像和h2元素嵌套在单个<div class =“ row”>元素中。 将您的h2元素嵌套在<div class =“ col-xs-8”>中，并将图像嵌套在<div class =“ col-xs-4”>中，以使它们位于同一行。

请注意，图像现在如何恰好适合文本大小？

**将Font Awesome图标添加到我们的按钮**
Font Awesome是一个方便的图标库。这些图标可以是webfonts或矢量图形。这些图标就像字体一样对待。您可以使用像素指定其大小，并且它们将假定其父HTML元素的字体大小。

通过将以下代码添加到HTML顶部，可以在任何应用程序中包含Font Awesome：
~~~
<link rel =“ stylesheet” href =“ https://use.fontawesome.com/releases/v5.8.1/css/all.css”完整性=“ sha384-50oBUHEmvpQ + 1lW4y57PTFmhCaXp0ML5d60M1M7uH2 + nqUivzIebhndOJK28anvf”> crossorigin =“ anonyms
~~~

我们已经为您在后台将此页面添加了它。

i元素最初用于使其他元素变为斜体，但现在通常用于图标。您可以将Font Awesome类添加到i元素以将其变成图标，例如：
~~~
<i class =“ fas fa-info-circle”></i>
~~~

注意，span元素也可以与图标一起使用。

使用Font Awesome可以通过给它一个i元素（带有fas和fa-thumbs-up类）向您的“喜欢”按钮添加一个大拇指图标。确保在图标旁边保留文本“Like”。


**将Font Awesome图标添加到我们的所有按钮**
Font Awesome是一个方便的图标库。 这些图标可以是Web字体或矢量图形。 这些图标就像字体一样对待。 您可以使用像素指定其大小，并且它们将假定其父HTML元素的字体大小。

使用Font Awesome将信息圆圈图标添加到您的信息按钮，并将垃圾桶图标添加到您的删除按钮。

注意：对于以下说明，span元素是i元素的可接受替代。

**响应式单选按钮**
您也可以在form元素上使用Bootstrap的col-xs-*类！这样，无论屏幕分辨率有多宽，我们的单选按钮都会在页面上均匀分布。

将两个单选按钮都嵌套在<div class=“row”>元素内。 然后将它们每个嵌套在<div class =“col-xs-6”>元素中。

注意：提醒一下，单选按钮是单选类型的input元素。
~~~
<div class="row">
    <div class="col-xs-6">
    <label><input type="radio" name="indoor-outdoor"> Indoor</label></div>
    <div class="col-xs-6">
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label></div>
</div>
~~~

**响应式样式复选框**
由于Bootstrap的col-xs-*类适用于所有form元素，因此您也可以在复选框中使用它们！这样，无论屏幕分辨率有多大，复选框都将均匀地分布在页面上。

将所有三个复选框嵌套在<div class =“row”>元素中。 然后将它们每个嵌套在<div class =“col-xs-4”>元素中。
~~~
</div>
    <div class="row">
      <div class="col-xs-4">
    <label><input        type="checkbox"name="personality"> Loving</     label></div>
    <div class="col-xs-4">
    <label><input        type="checkbox"name="personality"> Lazy</       label></div>
    <div class="col-xs-4">
    <label><input        type="checkbox"name="personality"> Crazy</      label></div>
</div>
~~~

**text inputs应用样式form-control**

您可以通过在submit按钮元素内添加
~~~
<i class =“fa fa-paper-plane”></i>
~~~
来添加Font Awesome图标。

给您的form的text input一个form-control的类。给您的form的submit按钮添加一个btn btn-primary类。同时为该按钮提供fa-paper-plane的Font Awesome图标。

.form-control类的所有text input，textarea和select元素的宽度均为100％。

**使用Bootstrap响应式排列表单元素**

现在，让我们在同一行上输入表单输入和提交按钮。 我们将以与以前相同的方式进行操作：将div元素与类行一起使用，并使用col-xs-*类在其中使用其他div元素。

将表格的文本输入和提交按钮嵌套在带有类行的div中。 使用col-xs-7类将表单的文本输入嵌套在div中。 将表格的提交按钮嵌套在带有col-xs-5类的div中。
~~~
</div>
    <div class="row">
      <div class="col-xs-7">
    <input type="text" class="form-control" placeholder="cat photo URL" required>
    </div>
    <div class="col-xs-5">
    <button type="submit" class="btn btn-primary"><i class="fa fa-paper-plane"></i> Submit</button>
    </div>
</div>
~~~

**创建引导标题**

现在，让我们从头开始构建一些东西，以练习我们的HTML，CSS和Bootstrap技能。

我们将建立一个jQuery游乐场，我们将很快将其用于jQuery挑战中。

首先，使用文本jQuery Playground创建一个h3元素。

使用文本主要的Bootstrap类为h3元素上色，并使用文本中心的Bootstrap类将其居中。
~~~
<h3 class="text-primary">jQuery Playground</h3>
~~~

**将我们的页面放在Bootstrap容器流体div中**

现在，让我们确保页面上的所有内容都对移动设备敏感。

让我们将h3元素嵌套在带有类container-fluid的div元素中。
~~~
<div class="container-fluid">
    <h3 class="text-primary text-center">jQuery Playground</h3>
    <div class="row"></div>
</div>
~~~

**创建Bootstrap行**

现在，我们将为内联元素创建一个Bootstrap行。

在h3标签下面创建一个div元素，并带有一类row。
~~~
<div class="container-fluid">
    <h3 class="text-primary text-center">jQuery Playground</h3>
    <div class="row"></div>
</div>
~~~

**拆分您的Bootstrap行**

现在我们有了一个Bootstrap行，让我们将其分为两列以容纳我们的元素。

在您的行中创建两个div元素，均使用col-xs-6类。
~~~
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
    <div class="row">
      <div class="col-xs-6">
    </div>
      <div class="col-xs-6">
    </div>

  </div>
</div>
~~~
**创建Bootstrap well**

Bootstrap有一个名为well的类，可以为您的列创建视觉上的深度感。

将一个div元素与该类一起嵌套在每个col-xs-6 div元素内。
~~~
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <div class="well"></div>
    </div>
    <div class="col-xs-6">
      <div class="well"></div>
    </div>
  </div>
</div>
~~~

**在Bootstrap well中添加元素**
现在，我们在该行的每一列中都有几个div元素。 这就是我们需要去的深度。 现在，我们可以添加按钮元素。

在每个well div元素中嵌套三个按钮元素。
~~~
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <div class="well">
        <button></button>
        <button></button>
        <button></button>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="well">
        <button></button>
        <button></button>
        <button></button>
      </div>
    </div>
  </div>
</div>
~~~

**应用默认的Bootstrap按钮样式**
Bootstrap具有另一个名为btn-default的按钮类。

将btn和btn-default类都应用于每个按钮元素。
~~~
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <div class="well">
        <button class="btn btn-default"></button>
        <button class="btn btn-default"></button>
        <button class="btn btn-default"></button>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="well">
        <button class="btn btn-default"></button>
        <button class="btn btn-default"></button>
        <button class="btn btn-default"></button>
      </div>
    </div>
  </div>
</div>
~~~
**创建一个使用jQuery选择器定位的类**
并非每个类都需要具有相应的CSS。 有时，我们创建类只是为了使用jQuery更轻松地选择这些元素。

给每个按钮元素指定类目标。
~~~
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <div class="well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
  </div>
</div>
~~~

**将id属性添加到Bootstrap元素**
回想一下，除了类属性外，您还可以为每个元素赋予一个id属性。

每个ID对特定元素必须是唯一的，并且每页只能使用一次。

让我们为类的每个div元素分别指定一个唯一的ID。

请记住，您可以给一个元素一个如下的ID：
~~~
<div class =“well” id =“center-well”>
~~~
给左边left-well的ID。 给右边right-well的ID。
~~~
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">

      <div class="well" id="left-well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
    <div class="col-xs-6">

      <div class="well" id="right-well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
  </div>
</div>
~~~
**Label Bootstrap Wells**

为了清楚起见，让我们用它们的ID标记两个井。

在左井上方的col-xs-6 div元素内，添加带有＃left-well文本的h4元素。

在右井上方的col-xs-6 div元素内，添加带有文本＃right-well的h4元素。
~~~
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
  </div>
</div>
~~~

**给每个元素一个唯一的ID**
我们还将希望能够使用jQuery通过其唯一ID定位每个按钮。

为每个按钮指定一个唯一的ID，以target1开始，以target6结尾。

确保target1到target3在＃left-well中，而target4到target6在＃right-well中。
~~~
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1"></button>
        <button class="btn btn-default target" id="target2"></button>
        <button class="btn btn-default target" id="target3"></button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4"></button>
        <button class="btn btn-default target" id="target5"></button>
        <button class="btn btn-default target" id="target6"></button>
      </div>
    </div>
  </div>
</div>
~~~
**Label Bootstrap Buttons**

就像我们标记wells一样，我们也想标记button。

为每个button元素提供与其ID选择器相对应的文本。
~~~
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
~~~

**使用注释来澄清代码**

当我们开始使用jQuery时，我们将修改HTML元素，而无需实际更改HTML中的元素。

让我们确保每个人都知道他们实际上不应该直接修改任何代码。

请记住，您可以使用<!-开始评论，并使用->结束评论。

在HTML顶部添加一条注释，该注释说“仅更改此行上方的代码”。
