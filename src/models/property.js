const ObjectId = require('mongoose').Schema.Types.ObjectId;
const mongoose = require('mongoose');

exports.Property = mongoose.model('Property', {
    title: { type: String, required: true },
    description: { type: String, required: true },
    adress: { type: String, required: true },
    country: { type: String, required: true },
    zipcode: { type: String, required: true },
    surface: { type: Number, required: true },
    n_rooms: { type: Number, required: true },
    travelers_limit: { type: Number, required: true },
    components: { type: [ObjectId], req: "Component", required: true }
});