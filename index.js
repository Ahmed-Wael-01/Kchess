const express = require('express');
const app = express();
const path = require('path');
const con = require('./db');
const jwt = require('jsonwebtoken');
const { userInfo } = require('os');
require('dotenv').config();

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

app.use(express.urlencoded({extended: false}));

app.use(express.json());

app.set('view engine', 'ejs');

app.use('/', authToken, require('./routes/pages'));
app.use('/auth', require('./routes/auth'));

function authToken(req, res, next){
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, userInfo) => {
    if(err) return res.sendStatus(403);
    req.user = userInfo.usrOrEmail;
    next();
  })
}

app.listen(3000, () => {
  console.log('server is running');
});
