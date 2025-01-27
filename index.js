//import essential packs
const express = require('express');
const app = express();
const path = require('path');
const con = require('./db');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const { userInfo } = require('os');

//use env variables
require('dotenv').config();

//setting up public directory
const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

app.use(express.urlencoded({extended: false}));

app.use(express.json());
app.use(cookieParser());

//setting up the view engine
app.set('view engine', 'ejs');

//use routes for better control system
app.use('/', authToken, require('./routes/pages'));
app.use('/auth', require('./routes/auth'));

//a middleware to authenticate users with jwt tokens
function authToken(req, res, next){
  const token = req.cookies.token;
  if (token == null) next();
  else{
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, userInfo) => {
      if(err) return res.sendStatus(403);
      req.body.user = userInfo.usrOrEmail;
      next();
    })
  }
}

app.listen(3000, () => {
  console.log('server is running');
});
