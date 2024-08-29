const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name : {
        type : String,
    },
    email : {
        type : String,
        unique : true,
        required : true
    },
    password : {
        type : String,
        required : true,
        unique : true
    },
    img : {
        type : String
    },
    cart :  {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Cart"
       }
    
},
{timestamps : true})

const User = mongoose.model("User", UserSchema);

module.exports = User;