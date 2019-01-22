const ObjectId = require('mongoose').Schema.Types.ObjectId;
const mongoose = require('mongoose');

exports.User = mongoose.model('User', { 
    profile: { type: ObjectId, ref: 'Profile', required: true },
    password: { type: String, required: true },  
    address: { type: String, required: true },
    country: { type: String, required: true },
    zipcode: { type: String, required: true }
});

