// import React from 'react'
// import { ChatState } from '../context/ChatProvider'
// import { Box, IconButton, Text } from '@chakra-ui/react';
// import { ArrowBackIcon } from '@chakra-ui/icons';
// // import {getSender}
// import { getSender,getSenderFull } from './../config/ChatLogic';
// import { get } from 'mongoose';
// import ProfileModal from './miscellaneous/ProfileModal';

// const SingleChat = () => {
//     const [user,selectedChat,setSelectedChat]=ChatState()
//   return (
//     <>
//     {
//       selectedChat ? (
//         <>
//         <Text
//         fontSize={{base:"28px",md:"30px"}}
//         px={2}
//         pb={3}
//         fontFamily="work sans"
//         d="flex"
//         alignItems="center"
//         justifyContent="center"
//         >
//           <IconButton 
//           d={{base:"flex" ,md:"none"}}
//           icon={<ArrowBackIcon/>}
//           onClick={()=>setSelectedChat("")}
//           />

//           {
//             !selectedChat.isGroupChat ? (
//               <>
//               {getSender(user,selectedChat.users)}
//               <ProfileModal user={getSenderFull(user,selectedChat.users)}/>
//               </>
//             ) :(
//               <>
//               {selectedChat.chatName.toUpperCase()}
//               </>
//             )
//           }
//         </Text>
        
//         <Box  
//         d="flex"
//         flexDir="column"
//         justifyContent="flex-end"
//         p={3}
//         bg="#E8E8E8"
//         w="100%"
//         h="100%"
//         borderRadius="lg"
//         overflowY="hidden"
        
//         >
          

//         </Box>
//         </>
//       )
      
      
//       :(
//         <Box d="flex" justifyContent="center" alignItems="center" h="100%">
//           <Text fontSize="3xl" pb={3} fontFamily="work sans">
//             click on a user to start chatting
//           </Text>
//         </Box>
//       )
//     }
//     </>
//   )
// }

// export default SingleChat


// import React from 'react';
// import { ChatState } from '../context/ChatProvider';
// import { Box, IconButton, Text } from '@chakra-ui/react';
// import { ArrowBackIcon } from '@chakra-ui/icons';
// import { getSender, getSenderFull } from './../config/ChatLogic';  // Clean up imports
// import ProfileModal from './miscellaneous/ProfileModal';

// const SingleChat = () => {
//   const [user, selectedChat, setSelectedChat] = ChatState(); // Improved variable naming for readability

//   return (
//     <>
//       {selectedChat ? (
//         <>
//           <Text
//             fontSize={{ base: '28px', md: '30px' }}
//             px={2}
//             pb={3}
//             fontFamily="work sans"
//             display="flex"
//             alignItems="center"
//             justifyContent="center"
//           >
//             <IconButton
//               display={{ base: 'flex', md: 'none' }}
//               icon={<ArrowBackIcon />}
//               onClick={() => setSelectedChat(null)} // Ensure you reset it properly
//             />

//             {!selectedChat.isGroupChat ? (
//               <>
//                 {getSender(user, selectedChat.users)}
//                 <ProfileModal user={getSenderFull(user, selectedChat.users)} />
//               </>
//             ) : (
//               <>{selectedChat.chatName.toUpperCase()}</>
//             )}
//           </Text>

//           <Box
//             display="flex"
//             flexDirection="column"
//             justifyContent="flex-end"
//             p={3}
//             bg="#E8E8E8"
//             width="100%"
//             height="100%"
//             borderRadius="lg"
//             overflowY="hidden"
//           >
//             {/* Messages area or other components can go here */}
//           </Box>
//         </>
//       ) : (
//         <Box display="flex" justifyContent="center" alignItems="center" height="100%">
//           <Text fontSize="3xl" pb={3} fontFamily="work sans">
//             Click on a user to start chatting
//           </Text>
//         </Box>
//       )}
//     </>
//   );
// };

// export default SingleChat;





import React from 'react';
import { ChatState } from '../context/ChatProvider';
import { Box, IconButton, Text } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { getSender, getSenderFull } from './../config/ChatLogic';  // Clean up imports
import ProfileModal from './miscellaneous/ProfileModal';

const SingleChat = () => {
  const [user, selectedChat, setSelectedChat] = ChatState(); // Improved variable naming for readability

  // Ensure selectedChat and selectedChat.users are valid
  const isUsersArray = Array.isArray(selectedChat?.users);

  return (
    <>
      {selectedChat ? (
        <>
          <Text
            fontSize={{ base: '28px', md: '30px' }}
            px={2}
            pb={3}
            fontFamily="work sans"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <IconButton
              display={{ base: 'flex', md: 'none' }}
              icon={<ArrowBackIcon />}
              onClick={() => setSelectedChat(null)} // Ensure you reset it properly
            />

            {!selectedChat.isGroupChat ? (
              <>
                {/* Check if selectedChat.users is an array before calling getSender */}
                {isUsersArray ? (
                  getSender(user, selectedChat.users)
                ) : (
                  <Text>Error: Invalid users data</Text>
                )}
                {isUsersArray && (
                  <ProfileModal user={getSenderFull(user, selectedChat.users)} />
                )}
              </>
            ) : (
              <>{selectedChat.chatName.toUpperCase()}</>
            )}
          </Text>

          <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-end"
            p={3}
            bg="#E8E8E8"
            width="100%"
            height="100%"
            borderRadius="lg"
            overflowY="hidden"
          >
            {/* Messages area or other components can go here */}
          </Box>
        </>
      ) : (
        <Box display="flex" justifyContent="center" alignItems="center" height="100%">
          <Text fontSize="3xl" pb={3} fontFamily="work sans">
            Click on a user to start chatting
          </Text>
        </Box>
      )}
    </>
  );
};

export default SingleChat;
