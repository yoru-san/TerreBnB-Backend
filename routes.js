var user_controller = require('./src/controllers/user_controller');
var property_controller = require('./src/controllers/property_controller');
var contrat_controller = require('./src/controllers/contrat_controller');

exports.init = (app) => {
    app.post('/api/user/login', (req, res) => {
        user_controller.login(req, res);
    });
    app.post('/api/user/authenticate', (req, res) => {
        user_controller.authenticate(req, res);
    });
    app.get('/api/user/profile/:id', (req, res) => {
        user_controller.showProfile(req, res);
    });
    app.get('/api/contrats/user/:id', (req, res) => {
        contrat_controller.showContratsOfUser(req, res);
    });
    app.get('/api/user/contrat/:id', (req, res) => {
        contrat_controller.showContrat(req, res);
    });
    app.get('/api/properties/user/:id', (req, res) => {
        property_controller.showPropertiesOfUser(req, res);
    });
    app.get('/api/property/property/:id', (req, res) => {
        property_controller.showProperty(req, res);
    });
}

