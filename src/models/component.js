const ObjectId = require('mongoose').Schema.Types.ObjectId;
const mongoose = require('mongoose');

exports.Component = mongoose.model('Component', {
    title: { type: String, required: true },
    slug: { type: String, required: true }
});