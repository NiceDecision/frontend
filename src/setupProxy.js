const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  // 일반 API 프록시 설정
  app.use(
    '/api', // 프론트엔드에서 `/api`로 요청하면 백엔드로 프록시됨
    createProxyMiddleware({
      target: process.env.REACT_APP_API_BASE_URL, // .env에서 API 주소 불러오기
      changeOrigin: true,
    })
  );

  // AI API 프록시 설정
  app.use(
    '/ai-api', // 프론트엔드에서 `/ai-api`로 요청하면 AI 백엔드로 프록시됨
    createProxyMiddleware({
      target: process.env.AI_API_BASE_URL, // .env에서 AI API 주소 불러오기
      changeOrigin: true,
    })
  );
};
