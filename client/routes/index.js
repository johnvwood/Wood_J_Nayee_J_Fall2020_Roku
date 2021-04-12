const express = require("express");
const router = express.Router();

const { createProxyMiddleware } = require("http-proxy-middleware");

router.use("/api", createProxyMiddleware({
    target: "http://localhost:5000",
    headers: {
        accept: "application/json, application/x-www-form-urlencoded"
    },
    changeOrigin: true
}))

router.use("/ums", createProxyMiddleware({
    target: "http://localhost:5000",
    headers: {
        accept: "application/json, application/x-www-form-urlencoded"
    },
    changeOrigin: true
}))


//ROUTES
    router.get("/", (req, res) => {
        res.render("index");
    })

    router.get("/login", (req, res) => {
        res.render("login");
    })

//ERROR 404 ROUTE
    router.use((req, res) => {
        res.status(404);
        res.render("error");
    })


module.exports = router;