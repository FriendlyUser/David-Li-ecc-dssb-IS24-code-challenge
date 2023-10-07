const express = require('express');
const apiController = require('./controllers/api');
const app = express();

app.use('/api', apiController);

app.listen(8000, () => {
  console.log('API server listening on port 8000');
});