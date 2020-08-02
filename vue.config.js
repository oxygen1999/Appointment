/*
 * @Author: angula
 * @Date: 2020-07-23 10:48:11
 * @LastEditTime: 2020-07-30 16:39:07
 * @FilePath: \working\vue-cli3 demo\vue.config.js
 */
module.exports = {
    // 修改的配置
    // 将baseUrl: '/api',改为baseUrl: '/',
    lintOnSave: false,
    devServer: {
        proxy: {
            '/api': {
                target: 'http://test.m.naoffer.com',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },

}