
import { ViewIcon } from '@chakra-ui/icons';
import { Button, IconButton, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react';
import React from 'react';

const ProfileModal = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* If children are passed, use them to open the modal; otherwise, render the IconButton */}
      {children ? (
        <span onClick={onOpen}>{children}</span> // Use the children element as the trigger
      ) : (
        <IconButton icon={<ViewIcon />} onClick={onOpen} />
      )}

      {/* Modal structure */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent h="410px">
          <ModalHeader 
          fontSize="40px"
          fontFamily="work sans"
          d="flex"
          justifyContent="center"

          >Profile Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody 
          d="flex"
          flexDir="column"
          alignItems="center"
          justifyContent="space-between">
           <Image
           borderRadius="full"
           boxSize="150px"
           src={user.pic}
           alt={user.name}
           
           />
           <Text
           fontSize={{base:"28px", md:"30px"}}
           fontFamily="work sans"
           >
            Email:{user.email}
           </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileModal;
