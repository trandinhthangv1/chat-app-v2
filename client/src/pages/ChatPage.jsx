import { Box } from '@chakra-ui/react';
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import MessageBox from '../components/Chat/MessageBox';
import UserList from '../components/Chat/UserList';
import Header from '../components/Header';
import { ChatContext } from '../context/ChatProvider';

const Chat = () => {
  const { user } = useContext(ChatContext);
  const history = useHistory();

  useEffect(() => {
    if (!user) history.push('/');
  }, [user, history]);

  return (
    <Box bg='#f5f5f5'>
      <Header />
      <Box maxW='1600px' m='auto' mt={70}>
        <Box d='flex' minH='calc(100vh - 70px)' py={12}>
          <UserList />
          <MessageBox />
        </Box>
      </Box>
    </Box>
  );
};

export default Chat;
