const express = require('express')
require("module-alias/register");
const connectDB = require('@config/db')
const dotenv = require('dotenv')

dotenv.config();

const app = express();
app.use(express.json());
connectDB();

let PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started on Port Number ${PORT}`))