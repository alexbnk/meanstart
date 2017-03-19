var express = require('express');
var app = express();


//Serve static files in the root directory:
app.use(express.static('public'));
//Serve the node_modules files without the need for full path:
app.use(express.static('node_modules'));

// Mongoose for mongoDB connection:
var mongoose = require('mongoose');

//Connect to your mongo database:
mongoose.connect('mongodb://localhost/examples', function(err) {
    if (err) throw err;
});


//Use body parser for
var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

//Load the xample data model/schema -> Use to manipualte data from mongoDB
var Example = require('./models/exampleModel')



// Start a server listener
app.listen(8000, function() {
    console.log("App: "+app.name+" is listening on 8000. ");

});
