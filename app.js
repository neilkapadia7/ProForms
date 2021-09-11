import express from 'express'
import "module-alias";
import connectDB from './config/db.js'

const app = express();
app.use(express.json());
// connectDB();

let PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started on Port Number ${PORT}`))