//非常重要的一个js文件,定义了调用服务端的各种方法啊
import http from './../../../base/api/public'
import querystring from 'querystring'

let sysConfig = require('@/../config/sysConfig');
let apiUrl = sysConfig.xcApiUrlPre;

export const page_list = (page, size, params) => {
//  请求服务端的页面查询接口
  return http.requestQuickGet(apiUrl+'/cms/page/list/' + page + '/' + size);
}



