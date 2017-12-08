//添加一行文字
function addText(){
  var textbox = new fabric.Textbox('一行文字', {
    left: 50,
    top: 50,
    width: 150,
    fontSize: 20
  });
  
  //去掉变形控制手柄
  /*textbox.setControlVisible('bl', false);
  textbox.setControlVisible('br', false);
  textbox.setControlVisible('mb', false);
  textbox.setControlVisible('mt', false);
  textbox.setControlVisible('tl', false);
  textbox.setControlVisible('tr', false);*/

  canvas.add(textbox).setActiveObject(textbox).renderAll();

  updateControls();
}

//删除
$('delText').onclick = function(){
  canvas.remove(canvas.getActiveObject());
  $('textControlPanel').style.display = 'none';
}

//选择字体
$('fontFamily').onchange = function(){
  canvas.getActiveObject().set("fontFamily", this.value);
  canvas.renderAll();
}

//选择背景颜色
$('backgroundColor').onchange = function(){
  canvas.getActiveObject().set("backgroundColor", this.value);
  canvas.renderAll();
}

//对齐
$('textAlign').onchange = function(){
  canvas.getActiveObject().set("textAlign", this.value);
  canvas.renderAll();
}

//字体大小
$('fontSize').onchange = function(){
  canvas.getActiveObject().set('fontSize', this.value);
  canvas.renderAll();
}

//样式
$('fontStyle').onchange = function(){
  canvas.getActiveObject().set('fontStyle', this.value);
  canvas.renderAll();
}

//选择字体颜色
$('fill').onchange = function(){
  canvas.getActiveObject().set("fill", this.value);
  canvas.renderAll();
}

//加粗
$('fontWeight').onchange = function(){
  canvas.getActiveObject().set('fontWeight', this.value);
  canvas.renderAll();
}

//上横线
$('overline').onchange = function(){
  canvas.getActiveObject().set('overline', this.value);
  canvas.renderAll();
}
//中横线
$('linethrough').onchange = function(){
  canvas.getActiveObject().set('linethrough', this.value);
  canvas.renderAll();
}
//下横线 
$('underline').onchange = function(){
  canvas.getActiveObject().set('underline', this.value);
  canvas.renderAll();
}

//行高
$('lineHeight').onchange = function(){
  canvas.getActiveObject().set('lineHeight', this.value);
  canvas.renderAll();
}

//透明度
$('opacity').onchange = function(){
  canvas.getActiveObject().set('opacity', this.value);
  canvas.renderAll();
}