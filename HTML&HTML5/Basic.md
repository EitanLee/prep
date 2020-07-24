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