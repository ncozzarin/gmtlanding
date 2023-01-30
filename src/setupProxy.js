const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/get_currency',
    createProxyMiddleware({
      target: 'https://ischange.li/icloud/',
      changeOrigin: true,
      pathRewrite: {'^/get_currency': '/get_currency.php'},
      logLevel: 'debug',
      secure:false,
      onProxyReq: (proxyReq, req, res) => {
        proxyReq.setHeader('cid', '49');
        proxyReq.setHeader('user', 'screen_user_49');
        proxyReq.setHeader('password', 'puzzl3');
        proxyReq.setHeader('output_type', 'json');
      }
    })
  );
};
