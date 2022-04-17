import {
  Box,
  Container,
  Icon,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import React, { useContext, useEffect } from 'react';
import { IoLogoSnapchat } from 'react-icons/io';
import { useHistory } from 'react-router-dom';
import Login from '../components/Auth/Login';
import SignUp from '../components/Auth/SignUp';
import { ChatContext } from '../context/ChatProvider';

const LoginPage = () => {
  const history = useHistory();
  const { user } = useContext(ChatContext);

  useEffect(() => {
    if (user) history.push('/chat');
  }, [history, user]);

  return (
    <Container maxW='container.xl' centerContent>
      <Box w='40%' maxW='3xl' justifyContent='center' p={3} m='40px 0 15px 0'>
        <Box d='flex' alignItems='center'>
          <Box animation='navspinv 2.4s infinite linear' ml={2}>
            <Icon as={IoLogoSnapchat} color='#f46119' />
          </Box>
          <Box ml='5'>
            <Text fontSize='xl' fontWeight='bold'>
              Xin chào, We are Vuichatchit
            </Text>
            <Text fontSize='md' color='gray.600'>
              Welcome to chitchat please login to your account
            </Text>
          </Box>
        </Box>
        <Tabs variant='soft-rounded' mt={5}>
          <TabList>
            <Tab
              _focus={{ boxShadow: 'none' }}
              width='50%'
              _selected={{ bg: 'rgba(244, 97, 25, 0.05)' }}
            >
              Đăng nhập
            </Tab>
            <Tab
              _focus={{ boxShadow: 'none' }}
              width='50%'
              _selected={{ bg: 'rgba(244, 97, 25, 0.05)' }}
            >
              Đăng ký
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel px={0} py={5}>
              <Login />
            </TabPanel>
            <TabPanel px={0} py={5}>
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default LoginPage;
