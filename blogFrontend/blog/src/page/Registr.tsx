import {
    Box,
    Flex,
    Heading,
    VStack,
    Text,
    Input,
    Button,
    useToast,
    HStack,
    FormErrorMessage,
    FormErrorMessageProps,
    BoxProps,
    FormControl,
    FormLabel,
    FormHelperText,
  } from '@chakra-ui/react';
  import { SetStateAction, useState } from 'react';
  import { Link, useNavigate } from 'react-router-dom';



export const Register=()=>{
    const [email, setEmail] = useState("");
    const handleInputEmail  = (e: { target: { value: SetStateAction<string>; }; }) => setEmail(e.target.value)
    const isError = email === ''
    const [password, setPassword] = useState("");
    const handleInputPassword = (e: { target: { value: SetStateAction<string>; }; }) => setPassword(e.target.value)
    const isError1 = password === ''
    const [username, setuserName] = useState("");
    const handleInputName= (e: { target: { value: SetStateAction<string>; }; }) => setuserName(e.target.value)
    const isError2 = username === ''
    const [password2, setPassword2] = useState('');
    const handleInputPassword2 = (e: { target: { value: SetStateAction<string>; }; }) => setPassword2(e.target.value)
    const isError3 = password2 === ''

    const navigate = useNavigate();
    const toast = useToast();

    const submitRegister = async () => {
        try {
          if (password !== password2) {
            toast({
              title: `You passwords doesn't match`,
              status: 'error',
              duration: 3000,
              position: 'top',
            });
            return;
          }
    
          const request = await fetch('/api/v1/auth/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password, email }),
          });
    
          const data = await request.json();
    
          if (request.status !== 201) {
            toast({
              title: data.message,
              status: 'error',
              duration: 3000,
              position: 'top',
            });
            return;
          }
    
          toast({
            title: data.message,
            status: 'success',
            duration: 3000,
            position: 'top',
          });
          navigate('/login');
        } catch (error) {
          toast({
            title: 'Server Error !',
            status: 'error',
            duration: 3000,
            position: 'top',
          });
        }
      };
      return(
      <Flex justifyContent='center' alignItems='center' height='100vh'>
      <VStack spacing='2rem' width='20rem'>
        <Heading>Register </Heading>
        <VStack align='left' spacing='1rem' width='100%'>
          <Box>
            <Text>Username</Text>
            <Input
              onChange={(e) => setuserName(e.target.value)}
              value={username}
              type='text'
            />
          </Box>
          <Box>
            <Text>Email</Text>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type='email'
            />
          </Box>
          <Box>
            <Text>Password</Text>
            <Input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type='password'
            />
          </Box>
          <Box>
            <Text>Confirm Password</Text>
            <Input
              onChange={(e) => setPassword2(e.target.value)}
              value={password2}
              type='password'
            />
          </Box>
          <Button onClick={submitRegister}>Register !</Button>
        </VStack>
        <HStack>
          <Text>Already have account ?</Text>
          <Link to='/login'>Login</Link>
        </HStack>
      </VStack>
    </Flex>
  );
    }
       