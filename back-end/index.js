const express = require('express');
const cors = require('cors');
const apiController = require('./controllers/api');

const app = express();

const whitelist = ['http://localhost:3000', 'http://127.0.0.1:3000']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(express.json());
app.use(cors(corsOptions))

app.use('/api', apiController);

app.listen(8000, () => {
  console.log('API server listening on port 8000');
});