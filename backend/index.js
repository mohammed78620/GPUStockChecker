  
const mongoose = require('mongoose');
require('dotenv').config();
const uri = process.env.ATLAS_URI;

function connect() {
  return new Promise((resolve, reject) => {

    if (process.env.NODE_ENV === 'test') {
      const Mockgoose = require('mockgoose').Mockgoose;
      const mockgoose = new Mockgoose(mongoose);

      mockgoose.prepareStorage()
        .then(() => {
            mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
                ).then((res, err) => {
                  if(err) return reject(err)
                  resolve()
                })
                const connection = mongoose.connection;
                connection.once('open', () => {
                  console.log("MongoDB database connection established successfully!!");
            })
            
        })
    } else {
        mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
            ).then((res, err) => {
              if(err) return reject(err)
              resolve()
            })
        const connection = mongoose.connection;
        connection.once('open', () => {
            console.log("MongoDB database connection established successfully");
          })
        
    }
  });
}

function close() {
  return mongoose.disconnect();
}

module.exports = { connect, close };