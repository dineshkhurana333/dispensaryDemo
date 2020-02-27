const responsetEnvelope = require('../../../common/requestForm');
const userModel = require('../../models/user');
const masterRolesModel = require('../../models/masterRoles');
module.exports = {

    register: function (req, res, next) {
        console.log('register');

        // new Promise((resolve, reject) => {
        //     let user = new userModel(req.body);
        //     user.save().catch(reject).then(resolve)
        // }).then(() => {
        //     res.json({ message: 'Registered successfully.' }).status(200);
        // }).catch(err => {
        //     return next(err);
        // })

        new Promise((resolve, reject) => {
            masterRolesModel.findOne({ roleIndex: req.body.role }).then(resolve).catch(reject);
        }).then((role) => {
            if (!role) {
                console.log('Im here')
                return res.status(404).json({ message: 'Invalid role.' });
            }

            saveUser(req, res, role, next).then(() => {
                res.json({ message: 'Registered successfully.' });
            }).catch((err) => {
                console.log('Errror in reg:: ', err)
                return res.status(500).json({ message: 'Something went wrong' });
            });

        }).catch((err) => {
            console.log('In error::', err)
            return res.status(500).json({ message: 'Something went wrong' });
        })
    }
}

function saveUser(req, res, masterRole, next) {
    return new Promise((resolve, reject) => {
        userModel.create({
            email: req.body.email,
            country_code: req.body.country_code,
            mobile_number: req.body.mobile_number,
            password: req.body.password,
            push_notification_status: req.body.push_notification_status,
            role: masterRole
        }).catch(reject).then(resolve);
    })
}