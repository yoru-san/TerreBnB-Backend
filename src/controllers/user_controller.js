const User = require("../models/user");
const Profile = require("../models/profile");

exports.showProfile = (req, res) => {
    User.findById(req.params.id).populate('profile').then(data => {
        res.json(data);
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
        user.password = userParams.password;
        user.address = userParams.address;
        user.country = userParams.country;
        user.zipcode = userParams.zipcode;

        user.save().then(data => {
            res.json(data);
        });
    });
}

