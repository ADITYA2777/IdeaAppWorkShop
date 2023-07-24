
 mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

name:{
type:String,
required:true
},
 userId:{
  type:String,
  required:true,
  unique:true
},
password:{
    type:String,
    unique:true
},
email:{
    type:String,
    required:true,
    unique:true,
    minLength:10,
    lowercase:true
},
userType:{
    type:String,
    required:true,
    default: "CUSTOMER",
    enum:["CUSTOMER","ADMIN"]
}

},{timestamps:true});

/**
 * define the collections name where it will be stored 
 */

module.exports = mongoose.model("user",userSchema)