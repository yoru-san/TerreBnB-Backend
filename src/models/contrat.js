const ObjectId = require('mongoose').Schema.Types.ObjectId;
const mongoose = require('mongoose');



exports.Contrat = mongoose.model('Contrat', { 

    tenant: { type: ObjectId, ref: 'Profile', required:true },
    owner: { type: ObjectId, ref: 'Profile', required:true },
    property: { type: ObjectId, ref: 'Property' ,required:true},
    start_date: { type: Date, required: true },  
    end_date: { type: Date, required: true },    
    travelers: { type: ObjectId, ref: 'Profile',required:true }
    
});