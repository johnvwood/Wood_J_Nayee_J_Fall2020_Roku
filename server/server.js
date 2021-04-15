const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');


const port = process.env.PORT || 5000;

const app = express();


app.use(cookieParser());

app.use(session({
    secret: "aaa",
    resave: false,
    saveUninitialized: false
}));


app.use((req, res, next) => {
    console.log('incoming request');
    //console.log(port);


    next();
});


app.use("/user", require("./routes/ums"));


app.use("/api", require("./routes/api"));
app.use("/ums", require("./routes/ums"));


app.listen(port, () => {
    console.log(`server running on ${port}`);
});