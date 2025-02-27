const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api', // 프론트엔드에서 `/api`로 요청하면 백엔드로 프록시됨
    createProxyMiddleware({
      target: process.env.REACT_APP_API_BASE_URL, // .env에서 API 주소 불러오기
      changeOrigin: true,
    })
  );
};
