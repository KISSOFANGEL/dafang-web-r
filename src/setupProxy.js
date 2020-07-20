const { createProxyMiddleware } = require('http-proxy-middleware');

　　module.exports = function(app) {
　　　　app.use('/dafang', createProxyMiddleware({
    　　　　 target: 'http://52.81.170.113:8090/',
            secure: true,
            changeOrigin: true,
            pathRewrite: {
                '/dafang/': '/', // rewrite path
              }
　　　　}));
        app.use('/mes', createProxyMiddleware({
    　　　　 target: 'https://data.jsxq.group',
            secure: true,
            changeOrigin: true
　　　　}));

　　};