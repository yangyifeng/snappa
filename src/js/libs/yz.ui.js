class UiLib {

  //浮动提示
  static flashTips(content) {
    $('body').append('<div class="flash-tips">'+content+'</div>');
    setTimeout(function(){
      $('.flash-tips').remove();
    }, 2000);
  }


}

// 赋值到yz助手对象
$$.ui = UiLib;

// 输出
export default function() {
  return UiLib;
}