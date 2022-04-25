module.exports = {
    //关闭eslink
    lintOnSave: false,
    devServer: {
        proxy: {
            '/users': {
                target: 'http://localhost:3000',
            }
        }
    }
}