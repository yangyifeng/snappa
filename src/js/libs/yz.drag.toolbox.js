/**
 *
 * 工具箱相关功能
 *
 **/

const tool = {
  canvasBgColor: $('input[name="canvasBackgroundColor"]'),
  canvasWidth: $('input[name="canvasWidth"]'),
  canvasHeight: $('input[name="canvasHeight"]'),
}

const target = {
  canvas: $('.design-board'),
}


//获取当前选中的元素
function activeElem() {
  $('.edit-box').each(function(){ 
    if($(this).hasClass('active'))
      return $(this);
    else
      return false;
  });
} 

export class ToolboxCanvasLib {

  //画布背景颜色
  static bgColor(val) {
    tool.canvasBgColor
      .val(val)
      .change(function(){
        target.canvas.css('backgroundColor', $(this).val());
      });
  }

  //画布宽度
  static width(val) {
    tool.canvasWidth
      .val(val)
      .change(function(){
        target.canvas.css('width', $(this).val());
      });
  }

  //画布高度
  static height(val) {
    tool.canvasHeight
      .val(val)
      .change(function(){
        target.canvas.css('height', $(this).val());
      });
  }

  //画布宽度高度一起设置
  static size(width, height) {
    target.canvas.css({
      'width': width,
      'height': height
    });
  }

}