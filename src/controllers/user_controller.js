const User = require("../models/user");
const Profile = require("../models/profile");
const uuid = require('uuid/v1');
var sha256 = require('sha256')


exports.showProfile = (req, res) => {
    User.findById(req.params.id).populate('profile').then(data => {
        res.json(data);
    });
}

exports.login = (req, res) => {
    Profile.find({ email: req.body.email }).then(data => {
        var profile = data[0];
        if (profile != null) {
            User.find({ profile: profile._id.toString() }).then(data => {
                var user = data[0];
                if (user != null) {
                    if (user.password == sha256(req.body.password)) {
                        //Géneration d'un csr en base & renvoie du csr au client
                        user.uuid = uuid();
                        res.json(user);
                        return;
                    }
                } else {
                    res.status(500).send("Les informations ne sont pas correctes.");
                }
            });
        } else {
            res.status(500).send("Les informations ne sont pas correctes.");
        }
    });
}

exports.createUser = (req, res) => {
    var userParams = req.body;

    var profile = new Profile
    profile.email = userParams.email;
    profile.firstname = userParams.firstname;
    profile.lastname = userParams.lastname;

    profile.save().then(data => {
        var user = new User
        user.profile = data._id.toString();
        user.password = sha256(userParams.password);
        user.address = userParams.address;
        user.country = userParams.country;
        user.zipcode = userParams.zipcode;

        user.save().then(data => {
            res.json(data);
        });
    });
}

