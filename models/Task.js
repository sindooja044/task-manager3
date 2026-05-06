const mongoose=require('mongoose')

const taskSchema=new mongoose.Schema({
    title:{
        required:true,
        type:String,
        trim:true,

    },
    completed:{
        default:false,
        type:Boolean,
    },
    

},
{timestamps:true}
)
module.exports=mongoose.model("Task",taskSchema)