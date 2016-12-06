const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//Todo.findOneAndRemove();
Todo.findByIdAndRemove('58446b142188392fdcbaefcc').then((todo) => {
    console.log(todo);
});