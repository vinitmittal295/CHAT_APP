import React ,{useEffect,useState}from "react"
import axios from "axios"
const ChatPage=()=>{
    const[chats,setChats]=useState([])

    const fetchchats=async()=>{
        const result=await axios.get("/api/chat")
        setChats(result.data)
    }

    useEffect(()=>{
        fetchchats()
    },[])

    return(
        <div>
        {chats.map((item) => {
            return <div key={item._id}>chatName:-{item.chatName}</div>;
        })}

        </div>
    )
}

export default ChatPage