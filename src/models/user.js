const ObjectId = require('mongoose').Schema.Types.ObjectId;
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    profile: { type: ObjectId, ref: 'Profile', required: true },
    password: { type: String, required: true },
    uuid: { type: String },
    address: { type: String, required: true },
    country: { type: String, required: true },
    zipcode: { type: String, required: true }
});

module.exports = mongoose.model('User', schema);

//Exemple schéma JSON 
// {
// 	"email": "celineb@gmail.com",
// 	"firstname": "celine",
// 	"lastname": "bertaud",
// 	"password": "password",
// 	"address": "Toulouse",
// 	"country": "France",
// 	"zipcode": "31330"
// }