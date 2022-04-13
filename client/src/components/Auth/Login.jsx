import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import loginUserApi from '../../services/auth/loginUser';

// import { ChatContext } from '../../context/ChatProvider';

const Login = () => {
  const [values, setValues] = useState({ email: '', password: '' });
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const history = useHistory();
  // const { setUser } = useContext(ChatContext);

  const handleToggle = () => setShow(!show);

  const handleChange = (event) => {
    const target = event.target.value;
    const name = event.target.name;
    setValues({ ...values, [name]: target });
  };

  const handleSubmit = async () => {
    setLoading(true);
    if (!values.email || !values.password) {
      toast({
        title: 'Vui lòng nhập đầy đủ thông tin',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top-right',
      });
      setLoading(false);
      return;
    }
    const { data, status } = await loginUserApi(values);
    if (status === 200) {
      toast({
        title: data.message,
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top-right',
      });
      setLoading(false);
      // setUser(data.data);
      // localStorage.setItem('chat-app-user', JSON.stringify(data.data));
      history.push('/chat');
      return;
    }
    toast({
      title: data.message,
      status: 'error',
      duration: 5000,
      isClosable: true,
      position: 'top-right',
    });
    setLoading(false);
  };

  return (
    <VStack spacing='24px'>
      <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <Input name='email' placeholder='Nhập email' onChange={handleChange} />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Mật khẩu</FormLabel>
        <InputGroup>
          <Input
            name='password'
            placeholder='Nhập mật khẩu'
            onChange={handleChange}
            type={show ? 'text' : 'password'}
          />
          <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='sm' onClick={handleToggle}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        width='100%'
        onClick={handleSubmit}
        isLoading={loading}
        _focus={{ boxShadow: 'none' }}
        className='button'
      >
        Đăng nhập
      </Button>
    </VStack>
  );
};

export default Login;
