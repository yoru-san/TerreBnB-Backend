const User = require("../models/user");

exports.showProfile = (req, res) => {
    User.findById(req.params.id).then(data => {
        res.json(data);
    });
}

