const express = require ("express")
const app = express();
const bodyParser = require("body-parser");

//usar body parser
app.use(bodyParser.json());
app.use(express.json());