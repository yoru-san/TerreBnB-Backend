const ObjectId = require('mongoose').Schema.Types.ObjectId;
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    author: { type: ObjectId, ref: 'Profile', required: true },
    target: { type: ObjectId, ref: 'Property', required: true },
    grade: { type: Number, required: true },  
    opinion: { type: String, required: true }
});

module.exports = mongoose.model('Comment', schema);


//Exemple schéma JSON 
// {
// 	"author": "5d052d0739d0132cb8a55410",
// 	"target": "5d0403ba3afe3d42e8f5cf25",
// 	"grade": "5",
// 	"opinion": "Très bon séjour"
// }