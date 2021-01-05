module.exports = {
    // 部署应用时的基本 URL
    publicPath: "",
    // build时构建文件的目录 
    outputDir: 'dist',
    // build时放置生成的静态资源 (js、css、img、fonts) 的目录
    assetsDir: 'static',
    // 指定生成的 index.html 
    indexPath: 'index.html',
    // 设置代理请求
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:4000',
                ws: true,
                changeOrigin: true
            },
        }
    }
}