// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //destructuring

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)  => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //Find one and update
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('59d2674165c32e00c717e0de')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  //Challange Find one and update name and inc age
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('59c9359666d80832c02f8eaf')
  }, {
    $set: {
      name: 'Roger'
    },
      $inc: {
        age: -1
      }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  //Challange Find one and inc age
  // db.collection('Users').findOneAndUpdate({
  //   _id: new ObjectID('59c9359666d80832c02f8eaf')
  // }, {
  //   $inc: {
  //     age: 1
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  //db.close();
});
