import React, { useContext, useEffect, useState } from 'react';
import { Avatar, Box } from '@chakra-ui/react';
import UserItem from './UserItem';
import UserSearch from './UserSearch';
import { ChatContext } from '../../context/ChatProvider';
import fetchAllChatApi from '../../services/chat/fetchAll';

const UserList = () => {
  const { user, chats, setChats } = useContext(ChatContext);

  useEffect(() => {
    if (!user) return;
    const fetchAllChat = async () => {
      try {
        const { data, status } = await fetchAllChatApi();
        if (status === 200) setChats(data.data);
      } catch (error) {
        console.log('error', error);
      }
    };
    fetchAllChat();
  }, []);

  return (
    <Box minH='100%' bg='#fff' borderRadius={8} w='30%'>
      <Box d='flex' alignItems='center' p={5} pos='relative'>
        <Avatar name={user?.name} src={user?.picture} size='sm' />
        <UserSearch />
      </Box>
      <Box
        maxH='calc(100vh - 250px)'
        overflowY='auto'
        className='custom-scrollbar'
      >
        {chats.map((chat) => (
          <UserItem key={chat._id} chat={chat} />
        ))}
      </Box>
    </Box>
  );
};

export default UserList;
