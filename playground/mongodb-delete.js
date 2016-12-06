const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.findOneAndRemove({_id:'584479147f5f9da2346797db'}).then((todo) => {
//     console.log(todo);
// })
// Todo.findByIdAndRemove('58446b142188392fdcbaefcc').then((todo) => {
//     console.log(todo);
// }); 