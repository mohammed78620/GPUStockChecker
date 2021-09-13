const express = require('express');
const mongoose = require('mongoose');
const app = require('./app')
const db = require('./index')

require('dotenv').config();

const port = process.env.PORT || 5000;

const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
// );
// const connection = mongoose.connection;
// connection.once('open', () => {
//   console.log("MongoDB database connection established successfully");
// })
db.connect().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port: ${port}` );

  });
})
