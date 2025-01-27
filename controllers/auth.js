const con = require('../db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { name } = require('ejs');
require('dotenv').config();

//a method to validate register data and importing the new users to the database
exports.register = (req, res) => {
    const {fname, lname, email, username, dob, country, gender, password, rpassword} = req.body;
    con.query('SELECT email FROM players WHERE email = ?', [email], async (err, result) => {
        if(err) throw err;
        if(result.length > 0) return res.render('signup', {
            message: 'This email already exists'
        });
        if(password !== rpassword) return res.render('signup', {
            message: 'passwords doesn\'t match'
        });

        let hashPass = await bcrypt.hash(password, 8);
        
        con.query('INSERT INTO players SET ?', {email: email,
                                                password: hashPass,
                                                country: country,
                                                gender: gender,
                                                fname: fname,
                                                lname: lname,
                                                birth_date: dob,
                                                nickname: username
        }, (err, results) => {
            if(err) throw err;
            else {
                return res.render('signup', {
                    message: 'Player registered successfuly'
                });
            }
        });
    });
};

//a method for validating login info and generating jwt token for the user
exports.login = (req, res) => {
    const {usrOrEmail, password} = req.body;
    con.query(`SELECT email, nickname, password FROM players WHERE email = '${usrOrEmail}' OR nickname = '${usrOrEmail}'`, async (err, result) => {
        if(err) throw err;
        if(result.length !== 1) return res.render('login', {
            message: 'no user found'
        });
        bcrypt.compare(password, result[0].password, (err, isRight) => {
            if(err) throw err;
            if(!isRight) {
                return res.render('login', {
                    message: 'password is incorrect'
                })
            } else {
                const token = jwt.sign({usrOrEmail, password}, process.env.ACCESS_TOKEN_SECRET);
                res.cookie('token', token, {httpOnly: true});
                return res.render('index', {user: usrOrEmail});
                /*return res.render('login', {
                    message: 'login success'
                });*/
            }
        });
    });
};
