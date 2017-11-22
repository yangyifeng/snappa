let yz = {};

// 修改页面 tdk
yz.title = function(val) {
  window.document.title = val;
}
function setMeta(name, val){
  var meta = document.getElementsByTagName('meta');
  for(var i=0; i<meta.length; i++){
    if(meta[i].name.toLowerCase() == name.toLowerCase()){
      meta[i].content = val;
      break;
    }
  }
}
yz.keyword = function(val) {
  setMeta('keywords', val);
}
yz.description = function(val) {
  setMeta('description', val);
}


// Api
import {apiInit, get, post, put, del, patch, picUploadApi, weixinAction, upload, getHost} from './yz.api';
apiInit(yz);
yz.get  = get;
yz.post = post;
yz.put = put;
yz.del = del;
yz.patch = patch;
yz.picUploadApi = picUploadApi;
yz.weixinAction = weixinAction;
yz.upload = upload;
yz.getHost = getHost;

// Cookie
import cookie from 'fg-cookie';
yz.cookie = cookie;



export default yz;