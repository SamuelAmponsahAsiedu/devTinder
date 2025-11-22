const express = require("express");
const connectDB = require("./config/database.js");
const User = require("./models/user.js");

const app = express();

app.post("/signup", async (req, res) => {
  //creating a new instance of the user model
  const user = new User({
    firstName: "PKA",
    lastName: "Asiedu",
    emailID: "PKA@gmail.com",
    password: "PKA123",
  });
  try{
    await user.save();
    res.send("User Added succesfully");
  }catch(err){
    res.status(400).send("error saving user;" + err.message)
  }
  
});

connectDB()
  .then(() => {
    console.log("Database connection established");
    app.listen(3000, () => {
      console.log("server is running on port 3000");
    });
  })
  .catch((err) => {
    console.log("Database cannot be connected", err);
  });
