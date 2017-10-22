const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then ((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove({_id: '59ecb658c88fd8f9d04f4b87'}).then ((todo) => {
//   console.log(todo);
// });

Todo.findByIdAndRemove('59ecb658c88fd8f9d04f4b87').then ((todo) => {
  console.log(todo);
});
