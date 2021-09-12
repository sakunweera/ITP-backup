const express = require('express'); //import express
const mongoose =require('mongoose'); //import mongoose to communicate with mongodb atlas
const bodyParser = require('body-parser'); //body parser used......
const cors = require('cors');

const app = express(); //invoke express

//import routes
const postRoutes = require('./routes/patients');


//app middleware
app.use(bodyParser.json());
app.use(cors());


app.use(postRoutes);

const PORT = 8321; //used to run application
const DB_URl = 'mongodb://twg:twg123@samp-shard-00-00.xadd8.mongodb.net:27017,samp-shard-00-01.xadd8.mongodb.net:27017,samp-shard-00-02.xadd8.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-tm24pz-shard-0&authSource=admin&retryWrites=true&w=majority' //Mongodb Database connection


mongoose.connect(DB_URl,
{ useNewUrlParser: true,
  useUnifiedTopology: true  
})
.then(() => {
    console.log("Database connected"); 
})
.catch((err) =>  console.log("Database connection error",err)); //catch is used to catch and display connection error message alog with error

app.listen(PORT, () =>{
    console.log(`App is running on ${PORT}`); //show that app is running on the indicated ports
 
});