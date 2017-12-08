function $(id){
    return document.getElementById(id);
}

//保存图片到本地
$('savePic').onclick = function(){
    Canvas2Image.saveAsPNG($('c'), 800, 500);
}

//查看 json 数据
function checkJSON(){
    console.log(JSON.stringify(canvas))
      
    //该 json 数据可以预加载
    //var json = JSON.stringify(canvas)
    //canvas.loadFromJSON(json, function(){
    //  console.log('done')
    //});
}