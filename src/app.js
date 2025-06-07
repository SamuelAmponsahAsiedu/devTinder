const express = require("express");

const app = express();

// app.use("/",(req, res) => {
//   res.send("Hello from server 3000");
// });
app.get("/user", (req,res) => {
    res.send({firstName: "Samuel", lastName: "Asiedu"})
})

app.post("/user", (req,res) =>{
    console.log("save data to database");
    res.send("data saved to database");
});

app.delete("/user", (req,res) =>{
    res.send("deleted succesfully")
})

app.use("/hello", (req, res) => {
  res.send("Hello Hello Hello");
});

app.use("/test",(req, res) => {
    res.send("Hello from the server")
})

app.listen(3000, () => {
  console.log("server is running on prt 3000");
});
