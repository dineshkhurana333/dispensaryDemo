const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({

    email: {
        type: String,
        required: true
    },
    country_code: {
        type: String,
        required: true
    },
    mobile_number: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    push_notification_status: {
        type: String,
        required: true
    },
    role: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'MatserRoles',
        required: true
    },
    active: {
        type: String,
        required: true,
        default: true
    },
    is_deleted: {
        type: String,
        required: true,
        default: false
    }
}, {
        timestamps: true
    })

module.exports = mongoose.model('User', userSchema);

