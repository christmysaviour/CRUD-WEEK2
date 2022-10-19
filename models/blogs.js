const mongoose = require('mongoose');

var schema = mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
        
    },
    gender:String,
    amount:Number,
    card:String

})

module.exports = mongoose.model('userdb',schema);