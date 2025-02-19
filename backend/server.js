// const express = require("express"); // common js

import express from "express"; // es6

const app = express();

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
