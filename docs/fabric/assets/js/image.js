//添加图片
function getFileUrl(sourceId) {   
  var url;   
  if (navigator.userAgent.indexOf("MSIE")>=1) {
    url = document.getElementById(sourceId).value;   
  }   
  else if(navigator.userAgent.indexOf("Firefox")>0) { 
    url = window.URL.createObjectURL(document.getElementById(sourceId).files.item(0));   
  }   
  else if(navigator.userAgent.indexOf("Chrome")>0) {
    url = window.URL.createObjectURL(document.getElementById(sourceId).files.item(0));   
  }   
  return url;   
} 
$('addImage').onchange = function(){
  
  fabric.Image.fromURL(getFileUrl('addImage'), function(img) {

    //去掉变形控制手柄
    /*img.setControlVisible('ml', false);
    img.setControlVisible('mb', false);
    img.setControlVisible('mt', false);
    img.setControlVisible('mr', false);*/

    canvas.add(img).setActiveObject(img).renderAll();

    updateControls();
  });
}


//图片滤镜
fabric.filterBackend = new fabric.Canvas2dFilterBackend();
var imgFilters = fabric.Image.filters;
var filters = ['invert', 'sepia', 'blackwhite', 'brightness', 'contrast', 'saturation', 'hue', 'noise', 'pixelate', 'blur'];

function applyFilter(index, filter) {
  var obj = canvas.getActiveObject();
  if(obj){
    obj.filters[index] = filter;
    obj.applyFilters();
    canvas.renderAll();
  }
}

$('invert').onclick = function(){
  applyFilter(0, this.checked && new imgFilters.Invert());
}
$('sepia').onclick = function(){
  applyFilter(1, this.checked && new imgFilters.Sepia());
}

$('blackwhite').onclick = function(){
  applyFilter(2, this.checked && new imgFilters.BlackWhite());
}

$('brightness').oninput = function(){
  applyFilter(3, new imgFilters.Brightness({
      brightness: parseFloat(this.value)
    }));
}
$('contrast').oninput = function(){
  applyFilter(4, new imgFilters.Contrast({
      contrast: parseFloat(this.value)
    }));
}
$('saturation').oninput = function(){
  applyFilter(5, new imgFilters.Saturation({
      saturation: parseFloat(this.value)
    }));
}
$('hue').oninput = function(){
  applyFilter(6, new imgFilters.HueRotation({
      rotation: parseFloat(this.value)
    }));
}
$('noise').oninput = function(){
  applyFilter(7, new imgFilters.Noise({
      noise: parseFloat(this.value, 10)
    }));
}
$('pixelate').onchange = function(){
  if(this.value < 2){
    applyFilter(8, false);
  }
  else{
    applyFilter(8, new imgFilters.Pixelate({
      blocksize: parseInt(this.value, 10)
    }));
  }
}
$('blur').oninput = function(){
  if(this.value == 0){
    applyFilter(9, false);
  }
  else{
    applyFilter(9, new imgFilters.Blur({
      blur: parseFloat(this.value, 10)
    }));
  }
}

//透明度
$('imgOpacity').onchange = function(){
  canvas.getActiveObject().set('opacity', this.value);
  canvas.renderAll();
}

//删除图片
$('delImage').onclick = function(){
  canvas.remove(canvas.getActiveObject());
  $('imgControlPanel').style.display = 'none';
}