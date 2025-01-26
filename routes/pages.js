const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    console.log(req.body);
    res.render("index", req.body);
});

router.get("/signup", (req, res) => {
    res.render("signup", req.body);
});

router.get("/login", (req, res) => {
    res.render("login", req.body);
});

router.get("/play", (req, res) => {
    res.render("play", req.body);
});

router.get("/sql", (req, res) => {
    con = require('../db');
    con.query("SHOW tables", (err, result, feilds) => {
        res.send(result);
    });
});

module.exports = router;
