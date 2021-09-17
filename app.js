const express = require('express')
require("module-alias/register");
const connectDB = require('@config/db')
const dotenv = require('dotenv')
const cors = require('cors')
const rateLimit = require('express-rate-limit')
const indexRoute = require('@routes/index');

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

connectDB();

// Rate Limiting for 10 minutes
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 100 
});
app.use(limiter);

app.use('/api', indexRoute)

// const __dirname = path.resolve()
// app.get('/', (req, res) =>
//   res.sendFile(path.resolve(__dirname, 'backend', 'views', 'index.html'))
// )

let PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started on Port Number ${PORT}`))