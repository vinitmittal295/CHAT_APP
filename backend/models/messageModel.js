const mongoose=require("mongoose")
const messageModal=mongoose.Schema({
    sender:{type:mongoose.Schema.Types.ObjectId, ref:"User"},
    content:{type:String, trim:true},
    chat:{type:mongoose.Schema.Types.ObjectId, ref:"chat"},

},
{
    timestamps:true,
})

const Message=mongoose.model("message",messageModel)
module.exports=Message