import { useState } from 'react'
import React from 'react'
import { FormControl, FormLabel, VStack ,Input, InputGroup, InputRightElement, Button} from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
const Signup = () => {
  const [show, setShow] = useState(false)
  const [name, setName] = useState()  
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [confirmpassword, setConfirmpassword] = useState()
  const [pic,setPic]=useState()
  const [loading,setLoading]=useState(false)
  const toast=useToast()
  const history =useHistory()

  const handleClick=()=>setShow(!show)
  const postDetails=(pics)=>{
    setLoading(true)  
    if(pics===undefined){
      toast({
        title:"Please Select an Image",
        status:"warning",
        duration:5000,
        isClosable:true,
        position:"bottom"
      });
      return;
    }

    if(pics.type==="imsge/jpeg" || pics.type==="image/png"){
      const data = new FormData()
      data.append("file",pics)
      data.append("upload_preset","chat-app")
      data.append("cloud_name","dvspa4voh")
      fetch("https://api.cloudinary.com/v1_1/dvspa4voh/image/upload",{
        method:"post",
        body:data,
      }).then((res)=>res.json())
      .then((data)=>{
        setPic(data.url.toString())
        console.log(data.url.toString());
        
        setLoading(false)
      })
      .catch((err)=>{
        console.log(err);
        setLoading(false)
        
      })
  }
  else{
    toast({
      title:"Please Select an Image",
      status:"warning",
      duration:5000,
      isClosable:true,
      position:"bottom"
    });
    return;
  }
  }


  
  const submitHandler=async()=>{
    setLoading(true)
    if(!name || !email || !password || !confirmpassword){
      toast({
        title:"Please Fill all the Feilds",
        status:"warning",
        duration:5000,
        isClosable:true,
        position:"bottom"
      });
      return;
    }
    if(password!==confirmpassword){
      toast({
        title:"Passwords Do Not Match",
        status:"warning",
        duration:5000,
        isClosable:true,
        position:"bottom"
      })
    }
    try {
      const config={
        headers:{
          "content-type":"application/json"

        }
      }
      const {data}= await axios.post("api/user",{
        name,
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
      isLoading={loading}
      >
        sign up
      </Button>
    </VStack>
  )
}

export default Signup