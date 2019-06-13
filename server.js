var bodyParser = require('body-parser');
var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var routes = require('./routes.js');
var config = require('./src/config/config');

var app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => res.sendFile('auth.html', { root : __dirname}));

routes.init(app);

mongoose.connect(config.db, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

connection.on('error', (err) => {
    console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
});

var port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("Server listening on port " + port);
});