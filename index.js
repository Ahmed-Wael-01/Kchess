const express = require('express');
const app = express();
const path = require('path');
const con = require('./db');

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/sql', (req, res) => {
  con.query('SHOW tables', (err, result, feilds) => {
    res.send(result);
  });
});

app.listen(3000, () => {
  console.log('server is running');
});
