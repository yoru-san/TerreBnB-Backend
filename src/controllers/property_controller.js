const Property = require("../models/property");

exports.showProperty = (req, res) => {
    Property.findById(req.params.id).then(data => {
        res.json(data);
    });
}

exports.showPropertiesOfUser = (req, res) => {
    var userId = req.params.id;
    Property.find({ id_owner: userId }).then(data => {
        res.json(data);
    });
}

exports.createProperty = (req, res) => {
    var propertyParams = req.body;
    var start_dt = datetime.create(contratParams.end_date);
    var end_dt = datetime.create(contratParams.end_date);
    var formatted_start_date = start_dt.format('d/m/Y');
    var formatted_end_date = end_dt.format('d/m/Y');

    var contrat = new Contrat
    routine.tenant = contratParams.tenant;
    routine.tenant = contratParams.owner;
    routine.tenant = contratParams.property;
    routine.tenant = formatted_start_date;
    routine.tenant = formatted_end_date;
    routine.tenant = contratParams.travelers;

    contrat.save().then(data => {
        res.json(data);
    })
}