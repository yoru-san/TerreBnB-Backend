const ObjectId = require('mongoose').Schema.Types.ObjectId;
const mongoose = require('mongoose');

exports.Contrat = mongoose.model('Contrat', { 

    id_tenant: { type: ObjectId, ref: 'Profile' },
    id_owner: { type: ObjectId, ref: 'Profile' },
    id_property: { type: ObjectId, ref: 'Property' },
    start_date: { type: Date, required: true },  
    end_date: { type: Date, required: true },    
    travelers: { type: ObjectId, ref: 'Profile' }
    
});