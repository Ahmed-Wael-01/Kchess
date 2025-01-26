const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.render("index");
});

router.get("/signup", (req, res) => {
    res.render("signup");
});

router.get("/login", (req, res) => {
    res.render("login");
});

router.get("/sql", (req, res) => {
    con = require('../db');
    con.query("SHOW tables", (err, result, feilds) => {
        res.send(result);
    });
});

module.exports = router;
