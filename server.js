const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const rootroute = require("./routes/rootroute");
const userroute = require("./routes/userroute");
const productroute = require("./routes/productroute");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 8000 || 6000;
const app = express();

connectDB();

// get request
// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// get request
// app.get("/users", (req, res) => {
//   res.send(usersdata);
// });

app.use("/", rootroute);
app.use("/users", userroute);
app.use("/products", productroute);

// server create
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.yellow);
});
