// C:\Users\Gautam-PC\mongo-data
// mongod.exe --dbpath /Users/Gautam-PC/mongo-data

//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to MongoDB server');
    // db.collection('Todos').insertOne({
    //     text: 'something to do',
    //     complete: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Nikhil',
    //     age: 25,
    //     location: 'Goa'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to connect', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.close();
});