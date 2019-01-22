var user_controller = require('./src/controllers/user_controller');
var property_controller = require('./src/controllers/property_controller');

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
    app.get('/api/user/contrats/:id', (req, res) => {
        user_controller.showContratsOfUser(req, res);
    });
    app.get('/api/user/contrat/:id', (req, res) => {
        user_controller.showContrat(req, res);
    });
    app.get('/api/user/properties/:id', (req, res) => {
        user_controller.showPropertiesOfUser(req, res);
    });
    app.get('/api/property/property/:id', (req, res) => {
        property_controller.showProperty(req, res);
    });
}

