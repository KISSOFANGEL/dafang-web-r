const { createProxyMiddleware } = require('http-proxy-middleware');

　　module.exports = function(app) {
　　　　app.use('/U9', createProxyMiddleware({
    　　　　 target: 'https://erptest.jsxq.group/',
            secure: true,
            changeOrigin: true
　　　　}));
        app.use('/mes', createProxyMiddleware({
    　　　　 target: 'https://data.jsxq.group',
            secure: true,
            changeOrigin: true
　　　　}));

　　};