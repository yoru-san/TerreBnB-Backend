var bodyParser = require('body-parser');
var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var routes = require('./routes.js');

var app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use(cors());
app.use(bodyParser.json());

routes.init(app);

mongoose.connect('mongodb://localhost/TerreBnB', { useNewUrlParser: true , useCreateIndex: true});

var port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("Server listening on port " + port);
});