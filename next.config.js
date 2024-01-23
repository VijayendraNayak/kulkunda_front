const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = {
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://seva.basavanamoolatemple.in/api/:path*', // Replace with your backend server's address
      },
    ];
  },
  async serverMiddleware() {
    // Create a proxy for '/api' requests
    this.nuxt.hook('render:setupMiddleware', (app) => {
      app.use(
        '/api',
        createProxyMiddleware({
          target: 'http://seva.basavanamoolatemple.in', // Replace with your backend server's address
          changeOrigin: true,
          pathRewrite: { '^/api': '' },
        })
      );
    });
  },
};