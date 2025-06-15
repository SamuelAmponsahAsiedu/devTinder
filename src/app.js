const express = require("express");

const app = express();

app.use(
    "/user",
    (req, res, next) => {
        console.log("handling the route user");
        //res.send("1st Response");
        next();
    },
    (req, res, next) =>{
        console.log("handling the route handler 2");
        //res.send("2nd Respoonse");
        next()
    },
    (req,res,next) => {
        console.log("handling the route user 2");
        res.send("3rd Response");
        //next()
    }
)
app.listen(3000, () => {
  console.log("server is running on prt 3000");
});
