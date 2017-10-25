const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const beerlist = require('./controllers/beerlist');
mongoose.Promise = global.Promise;


const app = express();

//connection to mongoose
const config = require('./config/database');
mongoose.connect(config.database,{ useMongoClient: true });

//Middleware for CORS
app.use(cors());
  
//Middleware for bodyparsing using both json and urlencoding
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,'public')));

app.get('/', function (req, res) {
    res.send('Invalid')
  })

  app.use('/beerlist', beerlist);

  app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
  })
