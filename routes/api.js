const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    //json encode in java
    res.json({ message: "you hit the api route" });
});

router.get("/users", (req, res) => {
    res.json({ message: "all users route" });
});

router.get("/movies", (req, res) => {
    res.json({ message: "all movies route" });
});

//dynamic, can accept a parameter
//currently accessing the 'id' param in 'movies'
router.get("/movies/:id", (req, res) => {
    res.json({ message: "all movies route", movie: req.params.id });
});

module.exports = router;