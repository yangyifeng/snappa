import "../vendor/bootstrap/bootstrap.amd";

import "./libs/yz.ui";
import "./libs/yz.helper";

import {DragCreateLib} from "./libs/yz.drag.create";

//图片原始数据
var layers = [
  {
    id: 'test001',
    type: 'image',
    content: 'http://www.yoozi.cn/usr/themes/yoozi/img/logo-white.png.pagespeed.ce.47k9VQu8IK.png',
    width: 83,
    height: 34,
    top: 80,
    left: 270,
    zIndex: 12,
    transform: 'matrix(0.966095, -0.258203, 0.258203, 0.966095, 24.1082, -15.6013)',
    angle: -0.24536632770880606,
    attribute: {
      opacity: 0.5,
    }
  },
  {
    id: 'test002',
    type: 'icon',
    content: 'fa-bicycle',
    width: 65,
    height: 50,
    top: 100,
    left: 281,
    zIndex: 13,
    transform: '0',
    angle: 0,
    attribute: {
      opacity: 0.8,
      color: '#1abc9c',
      fontSize: '50px'
    }
  },
  {
    id: 'test003',
    type: 'div',
    content: '',
    width: 130,
    height: 140,
    top: 100,
    left: 450,
    zIndex: 14,
    transform: '0',
    angle: 0,
    attribute: {
      opacity: 0.8,
      borderWidth: '12',
      borderColor: '#FFF',
      borderStyle: 'dashed',
      background: '#FF0000',
      borderRadius: '30px'
    }
  },
  {
    id: 'test004',
    type: 'div',
    content: '',
    width: 130,
    height: 1,
    top: 240,
    left: 320,
    zIndex: 15,
    transform: '0',
    angle: 0,
    attribute: {
      opacity: 0.8,
      borderWidth: '0',
      borderColor: 'none',
      borderStyle: 'none',
      background: '#FF0000',
      borderRadius: '0'
    }
  },
  {
    id: 'test005',
    type: 'textarea',
    content: '我滴个神呀',
    width: 230,
    height: 50,
    top: 180,
    left: 260,
    zIndex: 16,
    transform: '0',
    angle: 0,
    attribute: {
      opacity: 0.8,
      fontFamily: 'initial',
      fontSize: '14px',
      color: '#0000',
      textAlign: 'center',
      letterSpacing: '0px',
      lineHeight: '20px',
      textShadowOffset: '1px',
      textShadowBlur: '1px',
      textShadowColor: '#FFF'
    }
  }
];



let vm = avalon.define({
  $id: "design",
  //添加图片
  addPic: function(url) {
    DragCreateLib.image(url);
  },
  //添加文字
  addText: function(type) {
    DragCreateLib.textarea(type);
  },
  //添加icon
  addIcon: function(name) {
    DragCreateLib.icon(name);
  },
  //添加形状
  addDiv: function(type) {
    DragCreateLib.div(type);
  }

});




/* 提交网络请求 */
//pull
let pullA = function() {
  $$.get('page/5', null, (cb)=>{
  });
}

//pull
let pullB = function() {
  $$.get('page/6', null, (cb)=>{
  });
}
let pullAll = async function() {
  await pullA();
  await pullB();
}

//after pull
let afterPull = function() {
  $('a').tooltip();

  // 渲染 layers 
  layers.forEach(function(v){
    DragAddElement(v)
  });

}

$(function() {
  pullAll().then(() => afterPull());
});