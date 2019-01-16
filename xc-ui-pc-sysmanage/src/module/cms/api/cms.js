//非常重要的一个js文件,定义了调用服务端的各种方法啊
import http from './../../../base/api/public'
import querystring from 'querystring'

let sysConfig = require('@/../config/sysConfig');
let apiUrl = sysConfig.xcApiUrlPre;

export const page_list = (page, size, params) => {
  //将传过来的params的JSON字符串转换为key/value的格式
  let query = querystring.stringify(params);
  //请求服务端的页面查询接口
  return http.requestQuickGet(apiUrl + '/cms/page/list/' + page + '/' + size + "?" + query);
}



