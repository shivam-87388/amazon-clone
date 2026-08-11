const express = require('express');
const database = require('./config/connection.js');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT||5000

app.use(express.json());
app.use(cors());
database();


app.use('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})