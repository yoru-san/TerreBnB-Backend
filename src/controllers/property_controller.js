const Property = require("../models/property");
const Component = require("../models/component");

exports.showProperty = (req, res) => {
    Property.findById(req.params.id).populate('owner').then(data => {
        res.json(data);
    });
}

exports.showPropertiesOfUser = (req, res) => {
    Property.find({ owner: req.params.id }).populate('owner').then(data => {
        res.json(data);
    });
}

exports.createProperty = (req, res) => {
    var propertyParams = req.body;

    var property = new Property
    property.owner = propertyParams.owner;
    property.title = propertyParams.title;
    property.description = propertyParams.description;
    property.address = propertyParams.address;
    property.country = propertyParams.country;
    property.zipcode = propertyParams.zipcode;
    property.surface = propertyParams.surface;
    property.n_rooms = propertyParams.n_rooms;
    property.travelers_limit = propertyParams.travelers_limit;
    if (propertyParams.components != null && propertyParams.components.length > 0) {
        propertyParams.components.forEach(c => {
            property.components.push(c);
        });
    }

    property.save().then(data => {
        res.json(data);
    });
}

exports.getComponents = (_, res) => {
    Component.find().then(data => {
        res.json(data);
    });
}

exports.createComponent = (req, res) => {
    var componentParams = req.body;

    var component = new Component
    component.title = componentParams.title;
    component.slug = componentParams.slug;

    component.save().then(data => {
        res.json(data);
    });
}