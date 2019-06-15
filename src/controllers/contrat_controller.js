const Contrat = require("../models/contrat");

exports.showContratsOfUser = (req, res) => {
    Contrat.find({ $or: [{ owner: req.params.id }, { tenant: req.params.id }] }).then(data => {
        res.json(data);
    });
}

exports.showContrat = (req, res) => {
    Contrat.findById(req.params.id)
        .populate('tenant')
        .populate('owner')
        .populate('property')
        .populate('travelers')
        .then(data => {
            res.json(data);
        });
}

exports.createContrat = (req, res) => {
    var contratParams = req.body;

    var contrat = new Contrat
    contrat.tenant = contratParams.tenant;
    contrat.owner = contratParams.owner;
    contrat.property = contratParams.property;
    contrat.start_date = new Date(contratParams.start_date);
    contrat.end_date = new Date(contratParams.end_date);

    if (contratParams.travelers != null && contratParams.travelers.length > 0) {
        contratParams.travelers.forEach(c => {
            contrat.travelers.push(c);
        });
    }

    contrat.save().then(data => {
        res.json(data);
    })
}