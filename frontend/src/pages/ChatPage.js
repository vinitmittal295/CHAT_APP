import { Box } from "@chakra-ui/react"
import { ChatState } from "../context/ChatProvider"

import ChatBox from "../components/ChatBox"
import MyChats from "../components/MyChats"
import SideDrawer from '../components/miscellaneous/SideDrawer';
const ChatPage=()=>{
    const {user}=ChatState()
    return(
        <div style={{width:"100%"}}>
        {user && <SideDrawer/>}
        <Box>
            {user && <MyChats/>}
            {user && <ChatBox/>}
        </Box>

        </div>
    )
}

export default ChatPage