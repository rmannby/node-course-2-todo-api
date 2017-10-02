// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //destructuring

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)  => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //Delete many
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then ((result) => {
  //   console.log(result);
  // });

  //Delete one
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then ((result) => {
  //   console.log(result);
  // });

  //Find one and Delete
  // db.collection('Todos').findOneAndDelete({completed: false}).then ((result) => {
  //   console.log(result);
  // });

  //Challange Delete many
  // db.collection('Users').deleteMany({name: 'Roger'}).then ((result) => {
  //   console.log(result);
  // });

  //Challange Delete by ID
  db.collection('Users').findOneAndDelete({_id: new ObjectID('59c94ed87c821802c8b87637')}).then ((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });

  //db.close();
});
