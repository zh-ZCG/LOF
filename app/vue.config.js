module.exports = {
    //关闭eslink
    lintOnSave: false,
    devServer: {
        proxy: {
            '/': {
                target: 'http://localhost:3000',
            }
        }
    }
}