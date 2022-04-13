import {
  Box,
  Container,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import Login from '../components/Auth/Login';
import SignUp from '../components/Auth/SignUp';

const LoginPage = () => {
  return (
    <Container maxW='container.xl' centerContent>
      <Box w='35%' maxW='3xl' justifyContent='center' p={3} m='40px 0 15px 0'>
        <Box d='flex' alignItems='center'>
          <Image
            src='https://pro-theme.com/html/teamhost/assets/img/logo-big.png'
            maxH={45}
            alt='Logo'
            animation='navspinv 2.4s infinite linear'
          />
          <Box ml='5'>
            <Text fontSize='xl' fontWeight='bold'>
              Xin chào, We are Vuichatchit
            </Text>
            <Text fontSize='md' color='gray.600'>
              Welcome to chitchat please login to your account.
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
