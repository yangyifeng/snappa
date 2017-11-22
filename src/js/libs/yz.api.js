import $ from "../../vendor/jquery/jquery-1.11.2";

let $$ = {};

export function apiInit(yz) {
  $$ = yz;
}

let host = 'http://api.kidshome.cc/';
let cb   = function(){};

function apiSetting(type, path, success_callBack, fail_callBack) {
  var setting = {
    'url': path,
    'type': type,
    'accept': {
      'json': 'application/json'
    },
    'dataType': 'json',
    complete: function(xhr) {

      if(xhr.status >= 200 && xhr.status < 300 ){
        success_callBack(xhr.responseJSON);
      }
      else{
        fail_callBack(xhr.responseJSON);
      }
    }

  };

  return setting;
}

function tokenToUrl(link) {
  //添加 token
  if($$.cookie('token')){
    if(link.indexOf('?') != -1 ){
      link += '&token=' + $$.cookie('token')
    }
    else{
      link += '?token=' + $$.cookie('token')
    }
  }
  return link;
}

/**
 * query
 *
 * @parame method: get post put delete patch
 * @parame url: api
 * @parame params: 参数 {a:b, c:d}
 * @parame success_callBack: 成功返回执行
 * @parame fail_callBack: 失败返回执行
 *
 **/
function query(method, url, params = {}, success_callback = cb, fail_callback = cb) {

  var setting = apiSetting(method.toUpperCase(), tokenToUrl(host + url), success_callback, fail_callback)
  if (params) {
    setting['data'] = params;
  }

  return $.ajax(setting);
}

/**
 * upload
 **/
export function upload(url, data, success_callback = cb, fail_callback = cb) {
  var setting = apiSetting('POST', tokenToUrl(host + url), success_callback, fail_callback)
  setting['data'] = data;
  setting['contentType'] = false;
  setting['processData'] = false;
  setting['cache'] = false;

  return $.ajax(setting);
}

/**
 * GET
 *
 * @parame url: api
 * @parame params: 参数 {a:b, c:d}
 * @parame success_callBack: 成功返回执行
 * @parame fail_callBack: 失败返回执行
 *
 **/
export function get(url, params = {}, success_callback = cb, fail_callback = cb) {

  if(params){
    var p = [];
    for(var i in params){
      p.push(i + '=' + params[i]);
    }
    if(url.indexOf('?') == -1){
      url += '?' + p.join('&');
    }
    else{
      url += '&' + p.join('&');
    }
  }

  return query('GET', url, null, success_callback, fail_callback);
}

/**
 * POST
 *
 * @parame url: api
 * @parame params: 参数 {a:b, c:d}
 * @parame success_callBack: 成功返回执行
 * @parame fail_callBack: 失败返回执行
 *
 **/
export function post(url, params = {}, success_callback = cb, fail_callback = cb) {
  return query('POST', url, params, success_callback, fail_callback);
}

/**
 * PUT
 *
 * @parame url: api
 * @parame params: 参数 {a:b, c:d}
 * @parame success_callBack: 成功返回执行
 * @parame fail_callBack: 失败返回执行
 *
 **/
export function put(url, params = {}, success_callback = cb, fail_callback = cb) {
  return query('PUT', url, params, success_callback, fail_callback);
}

/**
 * DELETE 
 *
 * @parame url: api
 * @parame params: 参数 {a:b, c:d}
 * @parame success_callBack: 成功返回执行
 * @parame fail_callBack: 失败返回执行
 *
 **/
export function del(url, params = {}, success_callback = cb, fail_callback = cb) {
  return query('DELETE', url, params, success_callback, fail_callback);
}

/**
 * PATCH 
 *
 * @parame url: api
 * @parame params: 参数 {a:b, c:d}
 * @parame success_callBack: 成功返回执行
 * @parame fail_callBack: 失败返回执行
 *
 **/
export function patch(url, params = {}, success_callback = cb, fail_callback = cb) {
  return query('PATCH', url, params, success_callback, fail_callback);
}

/**
 * 微信登录
 * type: register,binding或login，默认执行绑定操作
 *
 **/
export function weixinAction(type) {
  var backurl = encodeURIComponent('http://' + window.location.host + '/auth/wxaction.html');
  var gourl = host + 'wechat/oauth?wechat_back_url='+ backurl +'&action='+type;
  if(type == 'binding'){
    gourl += '&token=' + $$.cookie('token');
  }
  window.location.href = gourl;
}


//图片上传接口
export function picUploadApi() {
  return tokenToUrl(host + 'user/avatar');
}

/**
 * 返回 host
 **/
export function getHost() {
  return host;
}
