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

    // db.collection('Todos').deleteMany({ text: 'lunch' }).then((result) => {
    //     console.log(result);
    // });
    // db.collection('Todos').deleteOne({ text: 'lunch' }).then((res) => {
    //     console.log(res);
    // });
    // db.collection('Todos').findOneAndDelete({ completed: false }).then((res) => {
    //     console.log(res); 
    // });

    // db.collection('Users').deleteMany({ name: 'Gautam' }).then((res) => {
    //     console.log(res);
    // });
    db.collection('Users').findOneAndDelete({ _id: new ObjectID("5842ebe2e80773c816ce9853") }).then((res) => {
        console.log(res);
    });

    //db.close();
});