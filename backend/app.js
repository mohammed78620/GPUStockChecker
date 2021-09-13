const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const gpuRouter = require('./routes/gpu')

app.use('/gpus', gpuRouter);

module.exports = app;