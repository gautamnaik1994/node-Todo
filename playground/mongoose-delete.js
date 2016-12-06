const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '584427f158ce6a2a3c027ef6';

// if (!ObjectID.isValid(id)) {
//     console.log('Id not valid');
// }

// Todo.find({_id: id}).then((todos) => {
//     console.log("Todos ", todos);
// });


// Todo.findOne({_id: id}).then((todo) => {
//     console.log("Todos ", todo);
// });

// Todo.findById(id).then((todo1) => {
//     if (!todo1) {
//         return console.log('Id not found');
//     }
//     console.log("Todos ", todo1);
// }).catch((e) => console.log(e));

//var id = '5844401ba0d279198d3df606';

//User.findById(id).then((res) => console.log(res));
//User.findOne({_id:id}).then((res) => console.log(res));
//User.find().then((res) => console.log(res));