const mongoose = require('mongoose');


const masterRoleSchema = new mongoose.Schema({
    role: {
        type: String,
        enum: ['admin', 'dispatcher', 'driver', 'customer']
    },
    roleIndex: {
        type: Number,
        enum: [1, 2, 3, 4]
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, {
        timestamps: true
    })


masterRoleSchema.statics.roles = [
    {
        role: 'admin',
        roleIndex: 1
    },
    {
        role: 'dispatcher',
        roleIndex: 2
    }, {
        role: 'driver',
        roleIndex: 3
    }, {
        role: 'customer',
        roleIndex: 4
    }
];

let masterRoles = mongoose.model('MatserRoles', masterRoleSchema);


module.exports = masterRoles;

