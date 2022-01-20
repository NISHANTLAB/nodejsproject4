const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type:String
    },
    gender:{
        type:String
    },
    phoneNumber:{
        type:String
    },
    address:{
        type:String
    },
    state:{
        type:String
    }
})

const Myuser = mongoose.model('myuser', schema);

module.exports = Myuser;