var user_controller = require('./src/controllers/user_controller');
var property_controller = require('./src/controllers/property_controller');
var contrat_controller = require('./src/controllers/contrat_controller');

exports.init = (app) => {
    app.get('/api/user/login', (req, res) => {
        user_controller.login(req, res);
    });
    app.post('/api/user/authenticate', (req, res) => {
        user_controller.createUser(req, res);
    });
    app.get('/api/user/profile/:id', (req, res) => {
        user_controller.showProfile(req, res);
    });
    app.get('/api/contrats/user/:id', (req, res) => {
        contrat_controller.showContratsOfUser(req, res);
    });
    app.post('/api/contrat/create', (req, res) => {
        contrat_controller.createContrat(req, res);
    });
    app.get('/api/contrat/:id', (req, res) => {
        contrat_controller.showContrat(req, res);
    });
    app.get('/api/properties/user/:id', (req, res) => {
        property_controller.showPropertiesOfUser(req, res);
    });
    app.get('/api/properties/property/:id', (req, res) => {
        property_controller.showProperty(req, res);
    });
    app.post('/api/property/create', (req, res) => {
        property_controller.createProperty(req, res);
    });
    app.post('/api/property/component/create', (req, res) => {
        property_controller.createComponent(req, res);
    });
    app.get('/api/property/components', (req, res) => {
        property_controller.getComponents(req, res);
    });
    app.get('/api/property/comment/:id', (req, res) => {
        property_controller.getCommentOfProperty(req, res);
    });
    app.post('/api/property/comment/create', (req, res) => {
        property_controller.addCommentToProperty(req, res);
    });
}

