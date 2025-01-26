const express = require('express');
const app = express();
const path = require('path');
const con = require('./db');
const jwt = require('jsonwebtoken');

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

app.use(express.urlencoded({extended: false}));

app.use(express.json());

app.set('view engine', 'ejs');

app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));

app.listen(3000, () => {
  console.log('server is running');
});
