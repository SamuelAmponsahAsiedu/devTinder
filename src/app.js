const express = require("express");

const app = express();

const { authAdmin, userAuth } = require("./middlewares/utils")

//Handling Auth midlleware for all GET, POST, DELETE...requests (writing a midlleware for all request coming to /admin handling)
app.use("/admin", authAdmin );

app.get("/user", userAuth, (req, res) => {
console.log("data sent for user")
  res.send("User Data Sent");
});

app.get("/admin/getAllUsers", (req, res) => {
  res.send("All Data Sent");
});

app.get("/admin/deleteAllUsers", (req, res) => {
  res.send("deleted a user");
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
