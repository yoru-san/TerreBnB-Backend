const ObjectId = require('mongoose').Schema.Types.ObjectId;
const mongoose = require('mongoose');

exports.Comment = mongoose.model('Comment', { 
    author: { type: ObjectId, ref: 'User', required: true },
    target: { type: ObjectId, ref: 'User', required: true },
    contrat: { type: ObjectId, ref: 'Contrat', required: true },
    grade: { type: Number, required: true },  
    opinion: { type: String, required: true },  

});