//引入插件
var htmlwp = require('html-webpack-plugin');
module.exports = {
    //指定打包的入口文件
    entry: './src/main.js',
    output: {
        // 注意：__dirname表示webpack.config.js所在目录的绝对路径
        path: __dirname + '/dist',
        //输出文件
        filename: 'build.js'
    },
    devtool: 'eval-source-map',
    plugins: [
        new htmlwp({
            //生成的页面标题<head><title>首页</title></head>
            title: '首页',
            //webpack-dev-server在内存中生成的文件名称，自动将build注入到这个页面底部，才能实现自动刷新功能
            filename: 'index.html',
            //根据index1.html这个模板来生成(这个文件请程序员自己生成)
            template: 'vue_02.html'
        })
    ]
}
