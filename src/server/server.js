import express from 'express';

import apiProxy from './routes/apiProxy';
import renderer from './renderer';

const app = express();

// static
app.use('/', express.static('dist/client'));

// api
app.use('/api', apiProxy);

// render
app.get('*', renderer());

app.listen(3000, () => {
  console.log('Running on http://localhost:3000/');
});
