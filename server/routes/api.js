const express = require("express");
const router = express.Router();
const connect = require("../config/sqlConfig");

//fetch movies
router.get("/movies", (req, res) => {
    connect.getConnection((err, connection) => {
        if (err) throw err;
        connection.query(`SELECT * FROM tbl_movies`, (error, results) => {
            connection.release();
            if (error) throw error;
            res.json(results);
        });
    });
})

router.get("/shows", (req, res) => {
    connect.getConnection((err, connection) => {
        if (err) throw err;
        connection.query(`SELECT * FROM tbl_shows`, (error, results) => {
            connection.release();
            if (error) throw error;
            res.json(results);
        });
    });
})

router.get("/audio", (req, res) => {
    connect.getConnection((err, connection) => {
        if (err) throw err;
        connection.query(`SELECT * FROM tbl_audio`, (error, results) => {
            connection.release();
            if (error) throw error;
            res.json(results);
        });
    });
})

// KIDS STUFF
router.get("/movieskids", (req, res) => {
    connect.getConnection((err, connection) => {
        if (err) throw err;
        connection.query(`SELECT * FROM tbl_movieskids`, (error, results) => {
            connection.release();
            if (error) throw error;
            res.json(results);
        });
    });
})

router.get("/showskids", (req, res) => {
    connect.getConnection((err, connection) => {
        if (err) throw err;
        connection.query(`SELECT * FROM tbl_showskids`, (error, results) => {
            connection.release();
            if (error) throw error;
            res.json(results);
        });
    });
})

router.get("/audiokids", (req, res) => {
    connect.getConnection((err, connection) => {
        if (err) throw err;
        connection.query(`SELECT * FROM tbl_audiokids`, (error, results) => {
            connection.release();
            if (error) throw error;
            res.json(results);
        });
    });
})



// router.get("/movies/:id", (req, res) => {
//     connect.query(`SELECT * FROM tbl_movies WHERE movies_id=${req.params.id}`, (error, results) => {
//         if (error) throw error;
//         res.json(results);
//     });
    
// })

module.exports = router;