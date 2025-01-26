const con = require('../db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { name } = require('ejs');
require('dotenv').config();

exports.register = (req, res) => {
    console.log(req.body);
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

exports.login = (req, res) => {
    console.log(req.body);
    const {usrOrEmail, password} = req.body;
    con.query(`SELECT email, nickname, password FROM players WHERE email = '${usrOrEmail}' OR nickname = '${usrOrEmail}'`, async (err, result) => {
        if(err) throw err;
        if(result.length !== 1) return res.render('login', {
            message: 'no user found'
        });
        console.log();
        bcrypt.compare(password, result[0].password, (err, isRight) => {
            if(err) throw err;
            if(!isRight) {
                return res.render('login', {
                    message: 'password is incorrect'
                })
            } else {
                const token = jwt.sign({usrOrEmail, password}, process.env.ACCESS_TOKEN_SECRET);
                res.json({accessToken: token});
                /*return res.render('login', {
                    message: 'login success'
                });*/
            }
        });
    });
};