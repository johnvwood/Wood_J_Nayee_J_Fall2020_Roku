//import express
const express = require("express");
const { createPool } = require("mysql");
const router = express.Router();

//import sql
const connect = require("../config/sqlConfig")

router.get("/", (req, res) => {
    //json encode in java
    res.json({ message: "you hit the api route" });
});

router.get("/users", (req, res) => {
    res.json({ message: "all users route" });
});

router.get("/movies", (req, res) => {
    //mysql documentation, select call
    connect.getConnection((err, connection) => {
        if (err) throw err; //no connection error
        connection.query(`SELECT * FROM tbl_movies`, (error, results) => {
            connection.release();
            if (error) throw error; //post-release error

            res.json(results);
        });
    });
});

//dynamic, can accept a parameter
//currently accessing the 'id' param in 'movies'
router.get("/movies/:id", (req, res) => {
    connect.query(`SELECT * FROM tbl_movies WHERE movies_id=${req.params.id}`, (error, results) => {
        if (error) throw error; //no connection error

        res.json(results);
    });
    
});

module.exports = router;