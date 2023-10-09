const express = require('express');
const cors = require('cors');
const apiController = require('./controllers/api');

const app = express();

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(express.json());
app.use(cors(corsOptions))

app.use('/api', apiController);

app.listen(8000, () => {
  console.log('API server listening on port 8000');
});