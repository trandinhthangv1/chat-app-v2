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
import registerUserApi from '../../services/auth/registerUser';
import uploadPictureApi from '../../services/cloudinary/uploadPicture';

const SignUp = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    picture: '',
  });
  const [picture, setPicture] = useState('');
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleToggle = () => setShow(!show);

  const handleChange = (event) => {
    const target = event.target.value;
    const name = event.target.name;
    setValues({ ...values, [name]: target });
  };

  const uploadPicture = async (file) => {
    setLoading(true);

    if (!file) {
      toast({
        title: 'Vui lòng chọn avatar',
        status: 'warning',
        duration: 5000,
        isClosable: true,
        position: 'bottom',
      });
      return;
    }

    if (file.type === 'image/jpeg' || file.type === 'image/png') {
      const data = new FormData();
      data.append('file', file);
      data.append('upload_preset', 'chat-app');
      data.append('cloud name', 'dlgi1yqxd');

      const pictureRes = await uploadPictureApi(data);
      if (pictureRes.status === 200) {
        setPicture(pictureRes.data.url);
        toast({
          title: 'Tải ảnh thành công',
          status: 'success',
          duration: 5000,
          isClosable: true,
          position: 'top-right',
        });
      }
      setLoading(false);
    } else {
      toast({
        title: 'Vui lòng chọn định dạng png hoặc jpeg',
        status: 'warning',
        duration: 5000,
        isClosable: true,
        position: 'top-right',
      });
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    const info = { ...values, picture };
    if (!info.email || !info.name || !info.password || !info.picture) {
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

    const { data, status } = await registerUserApi(info);

    if (status === 201) {
      toast({
        title: data.message,
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top-right',
      });
      setLoading(false);
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
      <FormControl id='name' isRequired>
        <FormLabel>Tên đăng nhập</FormLabel>
        <Input
          name='name'
          placeholder='Nhập tên đăng nhập'
          onChange={handleChange}
        />
      </FormControl>
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
      <FormControl>
        <FormLabel>Avatar</FormLabel>
        <Input
          type='file'
          accept='image/*'
          p={1.5}
          onChange={(event) => uploadPicture(event.target.files[0])}
        />
      </FormControl>
      <Button
        width='100%'
        onClick={handleSubmit}
        isLoading={loading}
        _focus={{ boxShadow: 'none' }}
        className='button'
      >
        Đăng ký
      </Button>
    </VStack>
  );
};

export default SignUp;
