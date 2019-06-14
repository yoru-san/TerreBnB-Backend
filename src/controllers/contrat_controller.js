const Contrat = require("../models/contrat");

exports.showContratsOfUser = (req, res) => {
    Contrat.find({ $or: [{ owner: req.params.id }, { tenant: req.params.id }] }).then(data => {
        res.json(data);
    });
}

exports.showContrat = (req, res) => {
    Contrat.findById(req.params.id).then(data => {
        res.json(data);
    });
}

exports.createContrat = (req, res) => {
    var contratParams = req.body;
    var start_dt = datetime.create(contratParams.end_date);
    var end_dt = datetime.create(contratParams.end_date);
    var formatted_start_date = start_dt.format('d/m/Y');
    var formatted_end_date = end_dt.format('d/m/Y');

    var contrat = new Contrat
    contrat.tenant = contratParams.tenant;
    contrat.owner = contratParams.owner;
    contrat.property = contratParams.property;
    contrat.start_date = formatted_start_date;
    contrat.end_date = formatted_end_date;
    contrat.travelers = contratParams.travelers;

    contrat.save().then(data => {
        res.json(data);
    })
}