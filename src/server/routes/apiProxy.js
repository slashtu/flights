import express from 'express';
import httpProxy from 'http-proxy';

const apiProxyRouter = express.Router();

const proxy = httpProxy.createProxyServer({
  target: `https://obscure-caverns-79008.herokuapp.com/`,
  changeOrigin: true,
  ws: true,
  timeout: 10 * 1000
});

// collect error logs
proxy.on('error', (error, req, res) => {});

apiProxyRouter.use((req, res) => {
  proxy.web(req, res);
});

export default apiProxyRouter;
