const express = require('express');
const app = express();
const con = require('./db');

app.get('/', (req, res) => {
  res.send('Welcome to hell\n');
});

app.get('/sql', (req, res) => {
  con.query('SHOW tables', (err, result, feilds) => {
    res.send(result);
  });
});

app.listen(3000, () => {
  console.log('server is running');
});
