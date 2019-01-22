const mongoose = require('mongoose');

exports.Profile = mongoose.model('Profile', { 
    email: { type: String, required: true },  
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
});