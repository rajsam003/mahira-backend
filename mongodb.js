//CRUD 
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'mahira-shoping'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
 if (error) {
 return console.log('Unable to connect to database!')
 }

 console.log('Connected Correctly')

 const db = client.db(databaseName)  //create db automatically 

 // Start to interact with the database

//  db.collection('Kurti').insertOne({
//      type: 'Rajasthani',
//      price: '400'
//  }, (err, result) => {
//      if(err){
//          return console.log("Unable to insert");
//      }

//      console.log(result.ops);
//  })

db.collection('Kurti').find({ price: '400' }).toArray((error, tasks) => {
    console.log(tasks)
   })
})