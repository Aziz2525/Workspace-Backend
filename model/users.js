const mongoose = require('./connect');

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    name_lastname:{
        type:String
    },
    password:{
        type:String,
        required:true
    },
    authorty:{
        type:String,
        required:true
    }
},{timestamps:true})
const usersModel = mongoose.model('users',userSchema)
module.exports= usersModel