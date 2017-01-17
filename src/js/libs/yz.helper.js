class HelperLib {

  //检查手机号码
  static testPhone(str) {
    if(str.length != 11){
      return false;
    }
    var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
    return reg.test(str);
  }

  //密码6-12位数字或者字母
  static testPassword(str) {
    if(str.length < 6 || str.length > 12){
      return false;
    }
    var reg = /^[0-9a-zA-z]{6,12}$/;
    return reg.test(str);
  }

  //解析错误返回
  static readError(ex) {

    if(ex.message && typeof ex.message == 'string'){
      return ex.message
    }
    else if(ex.errors){
      var string = ''
      for(var i in ex.errors){
        string += ex.errors[i]
      }
      return string;
    }
    else{
      return '数据校验错误';
    }
  }

  //字符串处理
  static trim(str, charlist) {
    //  discuss at: http://phpjs.org/functions/trim/
    // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // improved by: mdsjack (http://www.mdsjack.bo.it)
    // improved by: Alexander Ermolaev (http://snippets.dzone.com/user/AlexanderErmolaev)
    // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // improved by: Steven Levithan (http://blog.stevenlevithan.com)
    // improved by: Jack
    //    input by: Erkekjetter
    //    input by: DxGx
    // bugfixed by: Onno Marsman
    //   example 1: trim('    Kevin van Zonneveld    ');
    //   returns 1: 'Kevin van Zonneveld'
    //   example 2: trim('Hello World', 'Hdle');
    //   returns 2: 'o Wor'
    //   example 3: trim(16, 1);
    //   returns 3: 6

    var whitespace, l = 0,
      i = 0;
    str += '';

    if (!charlist) {
      // default list
      whitespace =
        ' \n\r\t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000';
    } else {
      // preg_quote custom list
      charlist += '';
      whitespace = charlist.replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '$1');
    }

    l = str.length;
    for (i = 0; i < l; i++) {
      if (whitespace.indexOf(str.charAt(i)) === -1) {
        str = str.substring(i);
        break;
      }
    }

    l = str.length;
    for (i = l - 1; i >= 0; i--) {
      if (whitespace.indexOf(str.charAt(i)) === -1) {
        str = str.substring(0, i + 1);
        break;
      }
    }

    return whitespace.indexOf(str.charAt(0)) === -1 ? str : '';
  }

}

// 赋值到yz助手对象
$$.helper = HelperLib;

// 输出
export default function() {
  return HelperLib;
}