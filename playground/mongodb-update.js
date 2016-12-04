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

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('584328e9e80773c816cea665')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((res) => {
    //     console.log(res);
    // });

    db.collection('Users').findOneAndUpdate(
    {
        name: 'Gautam'
    },
    {
        $set: { name: 'T'},$inc:{age:5}
    },
    {
        returnOriginal: false
    }).then((res) => {
        console.log(res);
    })

    //db.close();
});