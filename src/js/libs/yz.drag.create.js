import "./yz.drag.add";

/**
 *
 * 返回 新建 画布中元素 需要的 options，给 yz.drag.add 使用
 *
 **/

//时间戳
function getRandomId(type) {
  var t = new Date().getTime();
  return type + t;
}

//获取 zIndex
function getzIndex() {
  //待重构，根据目前的最高图层返回 +1 值
  return 1;
}

//创建新 layer
export class DragCreateLib {

  //创建图片
  static image(url) {
    var img = new Image();
    img.src = url;
    img.onload = function(){

      DragAddElement({
        id: getRandomId('image'),
        type: 'image',
        content: url,
        width: img.width,
        height: img.height,
        top: 10,
        left: 10,
        zIndex: getzIndex(),
        transform: 'initial',
        angle: 0,
        attribute: {
          opacity: 1,
        }
      })

    }
  }


  //创建文字
  static textarea(type){

    var text = (type == 'line') ? '单行文字' : '多行文字\n第二行文字\n第三行文字';

    DragAddElement({
        id: getRandomId('textarea'),
        type: 'textarea',
        content: text,
        width: 250,
        height: 100,
        top: 10,
        left: 10,
        zIndex: getzIndex(),
        transform: 'initial',
        angle: 0,
        attribute: {
          opacity: 0.8,
          fontFamily: 'initial',
          fontSize: '20px',
          color: '#0000',
          textAlign: 'center',
          letterSpacing: '0px',
          lineHeight: '30px',
          textShadowOffset: '1px',
          textShadowBlur: '1px',
          textShadowColor: '#FFF'
        }

      })

  }


  //创建 icon
  static icon(name) {

    var fontSize = 50;
    var icon = $(document.createElement('i')).appendTo('body');
    icon.addClass('fa ' + name).css('fontSize', fontSize);

    var size = {
      width: icon.width(),
      height: icon.height()
    };

    icon.remove();

    DragAddElement({
      id: getRandomId('icon'),
      type: 'icon',
      content: name,
      width: size.width,
      height: size.height,
      top: 10,
      left: 10,
      zIndex: getzIndex(),
      transform: 'initial',
      angle: 0,
      attribute: {
        opacity: 1,
        color: '#000',
        fontSize: fontSize
      }
    });

  }


  //创建 div
  static div(type) {

    var params = {};

    switch(type){
      case 'square':
        params = {
          width: 100,
          height: 50,
          borderRadius: 0
        };
        break;
      case 'circle':
        params = {
          width: 100,
          height: 100,
          borderRadius: '50%'
        };
        break;
      case 'line':
        params = {
          width: 100,
          height: 1,
          borderRadius: 0
        };
        break;
      case 'vertical':
        params = {
          width: 1,
          height: 50,
          borderRadius: 0
        };
        break;
    }

    DragAddElement({
      id: getRandomId('div'),
      type: 'div',
      content: '',
      width: params.width,
      height: params.height,
      top: 10,
      left: 10,
      zIndex: getzIndex(),
      transform: 'initial',
      angle: 0,
      attribute: {
        opacity: 0.8,
        borderWidth: '0',
        borderColor: '#000',
        borderStyle: 'solid',
        background: '#000',
        borderRadius: params.borderRadius
      }
    });
  }

}