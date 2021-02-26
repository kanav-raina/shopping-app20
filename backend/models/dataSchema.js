const mongoose = require('mongoose');

const dataSchema= new mongoose.Schema({
    site:{
        type:String,
        required:true,
    },
    uname:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
})

const dataUser = new mongoose.model('data',dataSchema);          

module.exports = dataUser