import express from 'express'

const app = express();

let PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started on Port Number ${PORT}`))