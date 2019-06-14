const ObjectId = require('mongoose').Schema.Types.ObjectId;
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    owner: { type: ObjectId, ref: "Profile", required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    address: { type: String, required: true },
    country: { type: String, required: true },
    zipcode: { type: String, required: true },
    surface: { type: Number, required: true },
    n_rooms: { type: Number, required: true },
    travelers_limit: { type: Number, required: true },
    components: [{ type: ObjectId, ref: "Component" }]
});

module.exports = mongoose.model('Property', schema);

// Exemple de schéma JSON
// {
// 	"owner": "5d03ebf4770f8418c4e506d4",
// 	"title": "Villa de 100m² dans le centre de Toulouse",
// 	"description": "Belle villa au sein de la ville Rose",
// 	"address": "31 rue des chenes Toulouse",
// 	"country": "Toulouse",
// 	"zipcode": "31330",
// 	"surface": "100",
// 	"n_rooms": "4",
// 	"travelers_limit": "5"
// }