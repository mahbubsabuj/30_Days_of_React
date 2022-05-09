const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "https://www.mediawiki.org/w/api.php",
    createProxyMiddleware({
      target: "https://www.mediawiki.org",
      changeOrigin: true,
    })
  );
};
