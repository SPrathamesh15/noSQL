const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const dotenv = require('dotenv');
dotenv.config();

let _db;

const mongoConnect = callback => {
  MongoClient.connect(
    `mongodb+srv://${process.env.MONGODBUSERNAME}:${process.env.PASSWORD}@cluster0.brta1me.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

  )
    .then(client => {
      console.log('Connected!');
      _db = client.db();
      callback();
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
