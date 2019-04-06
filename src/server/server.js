import express from 'express';

import apiProxy from './routes/apiProxy';
import renderer from './renderer';

const app = express();

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const devConfig = require('../../webpack/webpack.client.dev');
  const compiler = webpack(devConfig);

  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: devConfig.output.publicPath
    })
  );
}

// static
app.use('/', express.static('static'));

// api
app.use('/api', apiProxy);

// render
app.get('*', renderer());

app.listen(3000, () => {
  console.log('Running on http://localhost:3000/');
});
