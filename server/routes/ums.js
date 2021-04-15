const express = require("express");
const router = express.Router();
const connect = require("../config/sqlConfig");

router.use(express.json());
router.use(express.urlencoded({extended: false}));

router.post('/admin/login', (req, res) => {

    connect.query(`SELECT user_id, user_admin, user_access, user_avatar FROM tbl_user WHERE user_name = "${req.body.username}"`, (err, row) => {
        if (err) throw err;

        if (row.length) {
            res.status(200).json(row[0]);
        } else {
            res.status(404).json({failure: true, message: 'User does not exist'});
        }
    });
})

router.get('/admin/getusers', (req, res) => {
    connect.query('SELECT user_id, user_name, user_admin, user_access, user_avatar FROM tbl_user', (error, results) => {
        
        if (error) {
            res.status(444).json({message:'failure', status: `Cannot retrieve users`});
            throw error;
        }
        res.status(200).json(results);
    });
})

module.exports = router;