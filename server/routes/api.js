const express = require("express");
const router = express.Router();
const connect = require("../config/sqlConfig");

router.get("/movies", (req, res) => {
    //mysql documentation, select call
    connect.getConnection((err, connection) => {
        if (err) throw err; //connection error

        connection.query(`SELECT * FROM tbl_movies`, (error, results) => {
            connection.release();
            if (error) throw error;
            res.json(results);
        });
    });
})

router.get("/movies/:id", (req, res) => {
    connect.query(`SELECT * FROM tbl_movies WHERE movies_id=${req.params.id}`, (error, results) => {
        if (error) throw error;
        res.json(results);
    });
    
})

module.exports = router;