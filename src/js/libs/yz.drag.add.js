import "./yz.drag.done";
import "./yz.drag.matrix";
import "./yz.drag.drag";
import "./yz.drag.resize";
import "./yz.drag.rotate";

/**
 *
 * 根据 options 添加元素到画布中
 * 画板中有各种元素，包括：文字(textarea)，图片(image)，形状(div)，字体图标(icon)
 * 每个元素，都是一组完整的 dom，结构如下：
 *  <div class="edit-box">   --> 添加 .active 则表示是当前活跃的元素
 *    <img class="edit-content">   --> 这里可以是 文字(textarea)，图片(image)，形状(div)，字体图标(icon)
 *  </div>
 *
 **/


//其他事件
function createOtherManager(element) {

    function mousePress(event) {
        
        $('.edit-box').removeClass('active');
        $(event.target).closest('.edit-box').addClass('active');

        if($(element).hasClass('active')){
            //console.log($(element).attr('id'))
        }
    }

    $(document).bind('mousedown', mousePress);
}

//获取当前画板的缩放比例
function getScale() {
    //画板的比例被修改后，放入 localstorage 中保存 或者 全局变量保存，待考虑重构。。。
    return 1;
}

//新增画板元素
function addImage(options, elem) {
    var img = $(document.createElement('img')).appendTo(elem);
    img
    .addClass('edit-content')
    .attr('src', options.content)
    .css({
      'opacity': options.attribute.opacity
    });   
}

function addIcon(options, elem) {
    var icon = $(document.createElement('i')).appendTo(elem);
    icon
    .addClass('edit-content fa ' + options.content)
    .css({
      'opacity': options.attribute.opacity,
      'color': options.attribute.color,
      'fontSize': options.attribute.fontSize
    });
}

function addDiv(options, elem) {
    var div = $(document.createElement('div')).appendTo(elem);
    div
    .addClass('edit-content')
    .css({
        'opacity': options.attribute.opacity,
        'width': options.width - options.attribute.borderWidth*2,
        'height': options.height - options.attribute.borderWidth*2,
        'borderWidth': options.attribute.borderWidth,
        'borderColor': options.attribute.borderColor,
        'borderStyle': options.attribute.borderStyle,
        'background': options.attribute.background,
        'borderRadius': options.attribute.borderRadius
    });
}

function addTextarea(options, elem) {
    var textarea = $(document.createElement('textarea')).appendTo(elem);
    textarea
    .addClass('edit-content')
    .css({
        'opacity': options.attribute.opacity,
        'fontFamily': options.attribute.fontFamily,
        'fontSize': options.attribute.fontSize,
        'color': options.attribute.color,
        'textAlign': options.attribute.textAlign,
        'letterSpacing': options.attribute.letterSpacing,
        'lineHeight': options.attribute.lineHeight,
        'textShadow': options.attribute.textShadowOffset + ' ' + options.attribute.textShadowOffset + ' ' + options.attribute.textShadowBlur + ' ' + options.attribute.textShadowColor
    })
    .val(options.content);
}

function addElement(options) {

    var canvas = $('.design-board');
    var elem = $(document.createElement('div')).addClass('edit-box').appendTo(canvas);
    elem.css({
        width: options.width,
        height: options.height,
        top: options.top,
        left: options.left,
        zIndex: options.zIndex,
        transform: options.transform
    })
    .attr('data-angle', options.angle)
    .attr('data-type', options.type)
    .attr('id', options.id);

    switch(options.type){
        case 'image':       addImage(options, elem);            break;
        case 'icon':        addIcon(options, elem);             break;
        case 'div':         addDiv(options, elem);              break;
        case 'textarea':    addTextarea(options, elem);         break;
        default:            console.log(options.type + ' 待处理'); break;
    }

    var element = elem[0]; 
    new createDragManager(element);
    new createRotateManager(element);
    new createResizeManager(element);
    new createOtherManager(element);
}

function dragAddElement(options) {
    $('#'+options.id).length == 0 ? addElement(options) : console.log( options.id + ' 已存在，不能创建');
}

//渲染元素：根据参数 创建、修改 元素
window.DragAddElement = dragAddElement;