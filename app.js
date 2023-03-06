const express = require("express");
const request = require("request");
const bodyParser = require("bosy-parser");


const app = express();

app.listen(3000,()=>{
    console.log("Server running on port 3000");
})