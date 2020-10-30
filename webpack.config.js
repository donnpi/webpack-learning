const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlWebpackPlugin({
    // 指定要复制到根目录，并在浏览器自动打开的文件
    template: './src/index.html',
    filename: 'index.html'
});

const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    // 编译模式
    mode: 'production',
    // 指定打包入口
    entry: path.join(__dirname, 'src/index.js'),
    // 输出设置
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [htmlPlugin, new VueLoaderPlugin()],
    module: {
        rules: [
            // 打包css文件,postcss是兼容性处理，配合postcss.config.js
            { test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'] },
            // 打包less文件
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            // 打包scss文件
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            // 打包图片,字体文件,超过limit的会被转换成base64格式
            { test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/, use: ['url-loader?limit=130'] },
            // 处理js文件中的高级语法
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            // 打包vue文件
            { test: /\.vue$/, use: 'vue-loader' }
        ]
    }

}