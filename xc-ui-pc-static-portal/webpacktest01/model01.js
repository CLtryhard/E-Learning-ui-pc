var add = function(a, b){
    return a + b;
}
var add2 = function(a, b){
    return a + b + 2;
}
module.exports.add =add;
// module.exports ={add,add2};//如果有多个方法这样导出
// module.exports.add2 = add2//如果有多个方法也可以这样导出
