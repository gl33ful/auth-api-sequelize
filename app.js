const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: true}));
//app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", require("./routes/auth.routes"));

app.listen(5000, () => console.log("Server running on port 3000"));