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

    var property = new Property
    property.owner = propertyParams.owner;
    property.title = propertyParams.title;
    property.description = propertyParams.description;
    property.adress = propertyParams.adress;
    property.country = propertyParams.country;
    property.zipcode = propertyParams.property;
    property.surface = formatted_start_date;
    property.n_rooms = formatted_end_date;
    property.travelers_limit = propertyParams.travelers;
    propertyParams.components.forEach(c => {
        property.components.push(c);
    });

    property.save().then(data => {
        res.json(data);
    })
}