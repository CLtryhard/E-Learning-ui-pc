//非常重要的一个js文件,定义了调用服务端的各种方法啊
import http from './../../../base/api/public'
import querystring from 'querystring'

let sysConfig = require('@/../config/sysConfig');
//通过proxyTable进行http代理实现跨域访问
let apiUrl = sysConfig.xcApiUrlPre;

//页面查询
export const page_list = (page, size, params) => {
  //将传过来的params的JSON字符串转换为key/value的格式
  let query = querystring.stringify(params);
  //请求服务端的页面查询接口
  return http.requestQuickGet(apiUrl + '/cms/page/list/' + page + '/' + size + "?" + query);
};
//新增页面
export const page_add = params =>{
  //请求服务端的添加页面接口,并将页面数据传出
  return http.requestPost(apiUrl + '/cms/page/add', params);
};
//根据id查询页面
export const page_get = (id) => {
  return http.requestQuickGet(apiUrl + '/cms/page/query/' + id);
};
//修改页面
export const page_update = (id,params) => {
  return http.requestPut(apiUrl+'/cms/page/update/'+id,params)
};
//页面删除
export const page_del = id => {
  return http.requestDelete(apiUrl+'/cms/page/del/'+id)
};


