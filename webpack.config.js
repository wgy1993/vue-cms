const path = require('path');
// 在内存中，根据指定的模板页面，生成一份内存中的首页，同时自动把打包好的bundle注入到页面底部
// 如果要配置插件，需要在导出的对象中，挂载一个 plugins 节点
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, './src/main.js'), // 入口文件
    output: { // 指定输出选项
        path: path.join(__dirname, './dist'), // 输出路径
        filename: 'bundle.js' // 指定输出文件的名称
    },
    plugins: [ // 所有webpack  插件的配置节点
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'), // 指定模板文件路径
            filename: 'index.html' // 设置生成的内存页面的名称
        })
    ],
    module: { // 配置所有第三方loader 模块的
        rules: [ // 第三方模块的匹配规则
            {test: /\.css$/, use: ['style-loader', 'css-loader']}, // 处理 CSS 文件的 loader
            {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']}, // 处理 scss 文件的 loader
            {test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=7631&name=[hash:8]-[name].[ext]'}, // 处理 图片路径的 loader
            {test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader'}, // 处理 字体文件的 loader
            {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/}, // 配置 Babel 来转换高级的ES语法
            {test: /\.vue$/, use: 'vue-loader'} // 处理 .vue 文件的 loader
        ]
    },
    resolve: {
        alias: { // 修改 Vue 被导入时候的包的路径
            "vue$": "vue/dist/vue.js"
        }
    }
};