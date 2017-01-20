/**
 *
 * 编辑画板中的元素
 *
 **/

//获取当前选中的元素
function activeElem() {
  $('.edit-box').each(function(){ 
    if($(this).hasClass('active'))
      return $(this);
    else
      return false;
  });
} 

export class DragEditLib {

  //设置画布： 背景、宽度、高度
  static setCanvas(name, val) {
    $('.design-board').css(name, val);
  }

  //设置画布中元素的样式
  static setElement(name, val) {
    var ele = activeElem();

    if(!ele){
      console.log('没有选中的元素');
      return false;
    }

    ele.css(name, val);

  }

}