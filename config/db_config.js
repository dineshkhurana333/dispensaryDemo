const mongoose = require('mongoose');
require('./envConfig');

//Models
const masterRole = require('../app/models/masterRoles');

mongoose.connect('mongodb://' + process.env.DB_URL + '/' + process.env.DB_NAME, { useNewUrlParser: true }).then(() => {
    console.log('Db connected');

    masterRole.findOne({}).then((result) => {
        if (!result) {
            masterRole.insertMany(masterRole.roles)
        }
    })

}).catch(err => {
    console.log('Error in db connectivity:: ', err)
});





