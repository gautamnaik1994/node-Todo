// C:\Users\Gautam-PC\mongo-data
// mongod.exe --dbpath /Users/Gautam-PC/mongo-data

//const MongoClient = require('mongodb').MongoClient;
const {
    MongoClient,
    ObjectID
} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({
    //         _id: new ObjectID('5842de43471e9e2564be2955')
    //     })
    //     .toArray().then((docs) => {
    //         console.log('Todos');
    //         console.log(JSON.stringify(docs, undefined, 2));
    //     }, (err) => {
    //         console.log('Unable to fetch', err);
    //     });

    // db.collection('Todos').find()
    //     .count().then((count) => {
    //         console.log('Todos count ', count);
    //     }, (err) => {
    //         console.log('Unable to fetch', err);
    //     });

    db.collection('Users').find({name:'Gautam'}).toArray().then((docs) => { console.log(docs); }, (err) => { console.log(err); });

    //db.close();
});