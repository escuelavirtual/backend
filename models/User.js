const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },

    password : {
        type : String,
        required : true,
    },

    email : {
        type : String,
        required : true,
        unique : true
    },

    roles : {
        type : Array,
        default : []
    }, 

    subjects : {
        type : Array,
        default : []
    },

    class : {
        type : Array,
        default : []
    }, 

    groups : {
        type : Array,
        default : []
    },

    permissions : {
        type : Array,
        default : []
    },

    resources : {
        type : Array,
        default : []
    }

});

module.exports = mongoose.model('User', userSchema);