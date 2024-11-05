import { useState } from 'react'
import React from 'react'
import { FormControl, FormLabel, VStack ,Input, InputGroup, InputRightElement, Button} from '@chakra-ui/react'

const Signup = () => {
  const [show, setShow] = useState(false)
  const [name, setName] = useState()  
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [confirmpassword, setConfirmpassword] = useState()
  const [pic,setPic]=useState()

  const handleClick=()=>setShow(!show)
  const postDetails=(pics)=>{}
  const submitHandler=()=>{}


  return (
    <VStack spacing ="5px">
      <FormControl id='first-name' isRequired>
        <FormLabel>Name </FormLabel>
        <Input
        placeholder='enter your name' 
        onChange={(e)=>setName(e.target.value)}
        />
      </FormControl>
      <FormControl id='first-name' isRequired>
        <FormLabel>Email </FormLabel>
        <Input
        placeholder='enter your email' 
        onChange={(e)=>setEmail(e.target.value)}
        />
      </FormControl>

      <FormControl id='password' isRequired>
        <FormLabel>Password </FormLabel>
        <InputGroup>
        <Input
        type={ show ? "text" : "password"}
        placeholder='enter your password' 
        onChange={(e)=>setPassword(e.target.value)}
        />
       <InputRightElement width="4.5rem">
       <Button h="1.75rem " size="sm" onClick={handleClick}>
        {show ? "hide" :"show"}
       </Button>
       </InputRightElement> 
        </InputGroup>
        
      </FormControl>

      <FormControl id='password' isRequired>
        <FormLabel>confirm Password </FormLabel>
        <InputGroup>
        <Input
        type={ show ? "text" : "password"}
        placeholder='enter your confirm password' 
        onChange={(e)=>setConfirmpassword(e.target.value)}
        />
       <InputRightElement width="4.5rem">
       <Button h="1.75rem " size="sm" onClick={handleClick}>
        {show ? "hide" :"show"}
       </Button>
       </InputRightElement> 
        </InputGroup>
      </FormControl>

      <FormControl id='first-name' isRequired>
        <FormLabel>upload your picture</FormLabel>
        <Input
        type='file'
        p={1.5}
        accept='image/*'
        placeholder='enter your name' 
        onChange={(e)=>postDetails(e.target.files[0])}
        />
      </FormControl>


      <Button
      colorScheme='blue'
      width="100%"
      style={{marginTop:15}}
      onClick={submitHandler}
      >
        sign up
      </Button>
    </VStack>
  )
}

export default Signup