import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';

import apiProxy from '../routes/apiProxy';
import renderer from '../renderer';
import config from '../../../webpack/webpack.client';

const compiler = webpack(config);

const app = express();

// watch mode
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  })
);

app.use('/api', apiProxy);

app.use('/', express.static('dist/client'));

app.get('*', renderer());

app.listen(3000, () => {
  console.log('Running on http://localhost:3000/');
});
