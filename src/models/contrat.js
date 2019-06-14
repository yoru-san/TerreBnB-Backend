const ObjectId = require('mongoose').Schema.Types.ObjectId;
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    tenant: { type: ObjectId, ref: 'Profile', required: true },
    owner: { type: ObjectId, ref: 'Profile', required: true },
    property: { type: ObjectId, ref: 'Property', required: true },
    start_date: { type: Date, required: true },
    end_date: { type: Date, required: true },
    travelers: [{ type: ObjectId, ref: 'Profile', required: true }]
});

module.exports = mongoose.model('Contrat', schema);

//Exemple schéma JSON
// {
// 	"owner": "5d03ebf4770f8418c4e506d4",
// 	"tenant": "5d03ebf4770f8418c4e506d4",
// 	"property": "5d0403ba3afe3d42e8f5cf25",
// 	"start_date": "2019-07-24",
// 	"end_date": "2019-08-24",
//     "travelers": ["5d03ebf4770f8418c4e506d4", "5d03ebf4770f8418c4e506d4"]
// }