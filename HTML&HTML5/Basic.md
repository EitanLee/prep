### 链接（a标签）
- a标签也可以用于创建内部链接，以跳转到网页中的不同部分。
```
<a href="#contacts-header">Contacts</a>
...
<h2 id="contacts-header">Contacts</h2>
```
当用户单击“Contacts”的链接时，将跳转到使用“Contacts”作为id的部分。

- a标签也可以将链接嵌套在其他文本元素中。
```
<p>
  Here's a <a target="_blank" href="http://freecodecamp.org"> link to freecodecamp.org</a> for you to follow.
</p>
```
显示如下：
<p>
  Here's a <a target="_blank" href="http://freecodecamp.org"> link to freecodecamp.org</a> for you to follow.
</p>

- href="#"表示dead link
- 将其他标签放到a标签中，比如图片
```
<a href="#"><img src="https://bit.ly/fcc-running-cats" alt="Three kittens running towards the camera."></a>
```
<a href="#"><img src="https://bit.ly/fcc-running-cats" alt="Three kittens running towards the camera."></a>
- placeholder是用户输入任何内容之前在元素中显示的内容。
```
<input type="text" placeholder="this is placeholder text">
```
<input type="text" placeholder="this is placeholder text">
### 表单（form标签）
form标签用于提交数据,**action**指定提交的地址,button标签的submit为提交按钮
```
<form action="https://freecatphotoapp.com/submit-cat-photo">
    <input type="text" placeholder="cat photo URL">
    <button type="submit">Submit</button>
</form>
```
<form action="https://freecatphotoapp.com/submit-cat-photo">
    <input type="text" placeholder="cat photo URL">
    <button type="submit">Submit</button>
</form>

- 必填字段**required**
例如，如果要使文本输入字段为必填字段，则只需在输入元素中添加所需的属性，如下所示：
```
<input type =“text” required>
```
- 单选按钮**radio**
使用单选按钮来回答问题，希望用户仅在多个选项中给您一个答案。
```
<input type="radio"> Indoor
```
<input type="radio"> Indoor
一般搭配**label**使用，使得点击文本内容也能选中，比如
```
<label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor"> Indoor</label>
<label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor"> Outdoor</label>
```
<label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor"> Indoor</label>
<label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor"> Outdoor</label>
其中for属性规定 label 绑定到哪个表单元素。name属性值相同创建一个radio按钮组
- 复选框**checkbox**
同样搭配label使用更佳，相同name属性值创建checkbox组
```
   <label><input type="checkbox" name="personality"> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
```
   <label><input type="checkbox" name="personality"> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
- **value**
提交表单后，数据将发送到服务器，并包含所选选项的条目。 radio和checkbox类型的输入从value属性报告其值。 例如：
```
<label for="indoor"> 
  <input id="indoor" value="indoor" type="radio" name="indoor-outdoor">Indoor 
</label>
<label for="outdoor"> 
  <input id="outdoor" value="outdoor" type="radio" name="indoor-outdoor">Outdoor 
</label>
```
当用户提交选择了“Indoor”选项时，表单将提交的数据如下：indoor-outdoor = indoor。这来自Indoor的name属性和value属性。

如果省略该属性，则提交的表单数据将使用默认值on，即value=on。在这种情况下，如果用户单击"Indoor"选项并提交表单，则生成的表单数据将是indoor-outdoor=on，这是没有用的。因此，value属性需要设置为某些东西来标识选项。

- **checked**属性
可以使用checked属性设置默认情况下选中的复选框或单选按钮。
```
<input type="radio" name="test-name" checked>
```
<input type="radio" name="test-name" checked>
