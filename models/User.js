const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
   name:{
    type:String,
    required:true,


   },
   email:{
    required:true,
    type:String,
    unique:true
   },
   password:{
    type:String,
    required:true
   }
});
module.exports= mongoose.model("User",userSchema)