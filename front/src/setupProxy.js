const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use('/api/v1/', proxy({target: 'http://localhost:8000', sameOrigin: true,}));
  app.use('/media', proxy({target: 'http://localhost:8000', changeOrigin: true,}));
};