var canvas = new fabric.Canvas('c');

//加载模板
function loadJson(){
    var json = {
          "version": "2.0.0-rc.3",
          "objects": [
              {
                  "type": "textbox",
                  "version": "2.0.0-rc.3",
                  "originX": "left",
                  "originY": "top",
                  "left": 142,
                  "top": 178,
                  "width": 541,
                  "height": 51.98,
                  "fill": "#ffffff",
                  "stroke": null,
                  "strokeWidth": 1,
                  "strokeDashArray": null,
                  "strokeLineCap": "butt",
                  "strokeLineJoin": "miter",
                  "strokeMiterLimit": 10,
                  "scaleX": 1,
                  "scaleY": 1,
                  "angle": 0,
                  "flipX": false,
                  "flipY": false,
                  "opacity": 1,
                  "shadow": null,
                  "visible": true,
                  "clipTo": null,
                  "backgroundColor": "",
                  "fillRule": "nonzero",
                  "paintFirst": "fill",
                  "globalCompositeOperation": "source-over",
                  "transformMatrix": null,
                  "skewX": 0,
                  "skewY": 0,
                  "text": "领先的信息化方案提供商",
                  "fontSize": "46",
                  "fontWeight": "normal",
                  "fontFamily": "FZCaiYun",
                  "fontStyle": "normal",
                  "lineHeight": 1.16,
                  "underline": false,
                  "overline": false,
                  "linethrough": false,
                  "textAlign": "center",
                  "textBackgroundColor": "",
                  "charSpacing": 0,
                  "minWidth": 20,
                  "styles": {}
              },
              {
                  "type": "textbox",
                  "version": "2.0.0-rc.3",
                  "originX": "left",
                  "originY": "top",
                  "left": 207.99,
                  "top": 313,
                  "width": 472.01,
                  "height": 101.25,
                  "fill": "rgb(0,0,0)",
                  "stroke": null,
                  "strokeWidth": 1,
                  "strokeDashArray": null,
                  "strokeLineCap": "butt",
                  "strokeLineJoin": "miter",
                  "strokeMiterLimit": 10,
                  "scaleX": 1,
                  "scaleY": 1,
                  "angle": 0,
                  "flipX": false,
                  "flipY": false,
                  "opacity": 1,
                  "shadow": null,
                  "visible": true,
                  "clipTo": null,
                  "backgroundColor": "#ffff00",
                  "fillRule": "nonzero",
                  "paintFirst": "fill",
                  "globalCompositeOperation": "source-over",
                  "transformMatrix": null,
                  "skewX": 0,
                  "skewY": 0,
                  "text": "我们的客户正在解决本世纪最具挑战的问题，\n我们会提供创新的设计理念和丰富的技术工具、\n创造富有感染力和影响力的用户体验，\n帮助他们获得成功。",
                  "fontSize": 20,
                  "fontWeight": "normal",
                  "fontFamily": "FZDiShu",
                  "fontStyle": "normal",
                  "lineHeight": 1.16,
                  "underline": false,
                  "overline": false,
                  "linethrough": false,
                  "textAlign": "center",
                  "textBackgroundColor": "",
                  "charSpacing": 0,
                  "minWidth": 20,
                  "styles": {}
              }
          ],
          "background":"#2e404d"
      }

    canvas.loadFromJSON(json, function(){
      console.log('done')
    });
}

//设置 canvas 背景颜色
$('canvasBackgroundColor').onchange = function(){
    console.log(this.value)
    canvas.setBackgroundColor(this.value, canvas.renderAll.bind(canvas));
}

//设置 canvas 尺寸
$('canvasWidth').onchange = function(){
    canvas.setWidth(this.value, canvas.renderAll.bind(canvas));
}
$('canvasHeight').onchange = function(){
    canvas.setHeight(this.value, canvas.renderAll.bind(canvas));
}

//监听当前选中的元素
canvas.on({
    'mouse:down': updateControls,
});

//更新控制器
function updateControls(){

    console.log(canvas.getActiveObject());

    $('textControlPanel').style.display = 'none';
    $('imgControlPanel').style.display = 'none';

    if(canvas.getActiveObject() && canvas.getActiveObject().type == 'textbox'){
      var ob = canvas.getActiveObject();
      //显示控制器面板
      $('textControlPanel').style.display = 'block';
      //赋值各个参数 
      setInputValue('fontFamily', ob.fontFamily)
      setInputValue('backgroundColor', ob.backgroundColor)
      setInputValue('textAlign', ob.textAlign)
      setInputValue('fontSize', ob.fontSize)
      setInputValue('fontStyle', ob.fontStyle)
      setInputValue('fill', ob.fill)
      setInputValue('fontWeight', ob.fontWeight)
      setInputValue('overline', ob.overline)
      setInputValue('linethrough', ob.linethrough)
      setInputValue('underline', ob.underline)
      setInputValue('lineHeight', ob.lineHeight)
      setInputValue('opacity', ob.opacity)
    }
    
    if(canvas.getActiveObject() && canvas.getActiveObject().type == 'image'){
      var ob = canvas.getActiveObject();
      //显示控制器面板
      $('imgControlPanel').style.display = 'block';
      //赋值各个参数 
      setInputValue('imgOpacity', ob.opacity)
    }
}

//控制器的 input 赋值
function setInputValue(name, val){
    $(name).value = val;
}