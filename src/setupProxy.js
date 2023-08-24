const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api/v1', // 프록시를 설정할 엔드포인트 경로
    createProxyMiddleware({
      target: 'http://101.101.216.151:8080', // 실제 API 서버의 주소
      changeOrigin: true, // 도메인 변경
      secure: false, // HTTPS 요청 허용
    }),
  );
};
