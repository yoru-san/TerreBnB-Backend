const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    email: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
});

module.exports = mongoose.model('Profile', schema);

//Exemple schéma JSON 
//Voir User model 