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

      /*本地开发的时候引用服务器上的资源*/
      app.use('/user/pic', createProxyMiddleware({
          target: 'http://52.81.170.113/',
          secure: true,
          changeOrigin: true,
          pathRewrite: {
              '/': '/', // rewrite path
          }
      }));
        app.use('/mes', createProxyMiddleware({
    　　　　 target: 'https://data.jsxq.group',
            secure: true,
            changeOrigin: true
　　　　}));

　　};