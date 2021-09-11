import express from 'express'

const app = express();
app.use(express.json());

let PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started on Port Number ${PORT}`))