const mongoose = require('mongoose');

var memberSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    city: {
        type: String
    }
});

mongoose.model('Member', memberSchema);