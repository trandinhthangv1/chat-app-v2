import {
  Avatar,
  Box,
  Flex,
  Heading,
  Icon,
  IconButton,
  Spacer,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import { HiAnnotation, HiBell, HiOutlineLogout } from 'react-icons/hi';
import { GiGhost } from 'react-icons/gi';
import { ChatContext } from '../context/ChatProvider';
import { useHistory } from 'react-router-dom';

const Header = () => {
  const { user, setUser, setSelectedChat } = useContext(ChatContext);
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem('chat-app-user');
    setUser(null);
    setSelectedChat(null);
    history.push('/');
  };

  return (
    <Flex
      position='fixed'
      top={0}
      width='100%'
      height={70}
      bgColor='#fff'
      color='#223645'
      boxShadow='rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;'
      alignItems='center'
      zIndex={1}
    >
      <Box p='4' color='#353535' fontWeight='bold' d='flex' alignItems='center'>
        <Heading size='md'>Vui Chat Chit</Heading>
        <Box animation='navspinv 2.4s infinite linear' ml={2}>
          <Icon as={GiGhost} color='#f46119' fontSize='larger' />
        </Box>
      </Box>
      <Spacer />
      <Box p='4' display='flex' alignItems='center'>
        <Stack direction={['column', 'row']} spacing='10px'>
          <Box display='flex' alignItems='center' cursor='pointer'>
            <Avatar name={user?.name} src={user?.picture} size='sm' mr={2} />
            <Text fontSize='sm' fontWeight='bold'>
              {user?.name}
            </Text>
          </Box>
          <Box display='flex' alignItems='center' pos='relative'>
            <IconButton
              icon={<HiBell size={18} color='#646464' />}
              borderRadius='50%'
              _focus={{ boxShadow: 'none' }}
              size='sm'
              bg='rgba(244, 97, 25, 0.05)'
            />
            <span className='animation-ripple-delay1'></span>
          </Box>
          <Box display='flex' alignItems='center' pos='relative'>
            <IconButton
              icon={<HiAnnotation size={18} color='#646464' />}
              borderRadius='50%'
              _focus={{ boxShadow: 'none' }}
              size='sm'
              bg='rgba(244, 97, 25, 0.05)'
            />
            <span className='animation-ripple-delay1'></span>
          </Box>
          <Box display='flex' alignItems='center'>
            <IconButton
              icon={<HiOutlineLogout size={18} color='#646464' />}
              borderRadius='50%'
              _focus={{ boxShadow: 'none' }}
              onClick={handleLogout}
              size='sm'
              bg='rgba(244, 97, 25, 0.05)'
            />
          </Box>
        </Stack>
      </Box>
    </Flex>
  );
};

export default Header;
