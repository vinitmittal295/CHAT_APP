
const asyncHandler = require('express-async-handler')
const chat=require("../models/chatModels")
const User=require("../models/userModels")
const accessChat= asyncHandler(async(req,res)=>{
    const {userId}=req.body
    if(!userId){
        console.log("no user id");
        
        res.sendStatus(400)
        throw new Error('User not found')
    }

    var isChat=await chat.find({
        isGroupChat:false,
        $and:[
            {users:{$elemMatch:{$eq:req.user._id}}},
            {users:{$elemMatch:{$eq:userId}}},
        ],

    }).populate("users","-password").populate("latestMessage")
    isChat=await User.populate(isChat,{
        path:"latestMessage.sender",
        select:"name pic email",
    })
    if(isChat.length>0){
        res.send([isChat[0]])
    }
    else{
        var chatData={
            chatName:"sender",
            isGroupChat:false,
            users:[req.user._id,userId]
        }
    }
    try {
        const createdChat=await chat.create(chatData)
        const fullChat=await chat.findOne({_id:createdChat._id}).populate(
            "users",
            "- password"
        )
        res.status(200).send(fullChat)
    } catch (error) {
        res.status(400)
        throw new Error(error.message)  

    }
})

module.exports={accessChat}