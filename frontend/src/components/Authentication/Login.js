import { useState } from 'react'
import React from 'react'
import { FormControl, FormLabel, VStack ,Input, InputGroup, InputRightElement, Button} from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

const Login = () => {

  const [show, setShow] = useState(false)
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  
  const [loading,setLoading]=useState(false)
  const toast=useToast()
  const history =useHistory() 
 

  const handleClick=()=>setShow(!show)
  const submitHandler=async()=>{
    setLoading(true)
    if(!email || !password ){
      toast({
        title:"Please Fill all the Feilds",
        status:"warning",
        duration:5000,
        isClosable:true,
        position:"bottom"
      });
      return;
    }
    try {
      const config={
        headers:{
          "content-type":"application/json"

        }
      }
      const {data}= await axios.post("api/user/login",{
        
        email,
        password
      },config)

      toast({
        title:"Registration Successful",
        status:"success",
        duration:5000,
        isClosable:true,
        position:"bottom"
      })

      localStorage.setItem("userInfo",JSON.stringify(data))
      setLoading(false)
      history.push("/chats")
    } 
    catch (error) {
      
      toast({
        title:"Error Occured!",
        description:error.response.data.message,
        status:"error",
        duration:5000,
        isClosable:true,
        position:"bottom"
      })
      setLoading(false)
    }
  }
  return (
    <VStack spacing ="5px">
      
      <FormControl id='first-name' isRequired>
        <FormLabel>Email </FormLabel>
        <Input
        placeholder='enter your email' 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
      </FormControl>

      <FormControl id='password' isRequired>
        <FormLabel>Password </FormLabel>
        <InputGroup>
        <Input
        type={ show ? "text" : "password"}
        placeholder='enter your password' 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
       <InputRightElement width="4.5rem">
       <Button h="1.75rem " size="sm" onClick={handleClick}>
        {show ? "hide" :"show"}
       </Button>
       </InputRightElement> 
        </InputGroup>
        
      </FormControl>



      <Button
      colorScheme='blue'
      width="100%"
      style={{marginTop:15}}
      onClick={submitHandler}
      isLoading={loading}
      >
        Login 
      </Button>

      <Button
      variant="solid"
      colorScheme='red'
      width="100%"
      onClick={()=>{
        setEmail("admin@gmail.com")
        setPassword("admin123")
      }}
      >
        Get Guest User Credentials
      </Button>
    </VStack>
  )
}

export default Login