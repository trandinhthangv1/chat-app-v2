import React, { useContext } from 'react';
import { Avatar, Box, Text } from '@chakra-ui/react';
import { ChatContext } from '../../context/ChatProvider';

const UserItem = ({ chat }) => {
  const { selectedChat, setSelectedChat } = useContext(ChatContext);
  const friend = chat.users[1];

  return (
    <Box
      d='flex'
      justifyContent='space-between'
      alignItems='center'
      _hover={{ bg: '#f5f5f5' }}
      borderRadius={8}
      mx={3}
      p={4}
      backgroundColor={chat._id === selectedChat?._id && '#f5f5f5'}
      my={1}
      cursor='pointer'
      onClick={() => setSelectedChat(chat)}
    >
      <Box d='flex' alignItems='center'>
        <Avatar name={friend.name} src={friend.picture} size='md' />
        <Box ml={2}>
          <Text fontSize='md'>{friend.name}</Text>
          <Text fontSize='13px'>Tin nhắn mới nhất</Text>
        </Box>
      </Box>
      <Box>
        <Text fontSize='13px' textAlign='end'>
          7h
        </Text>
        <Text fontSize='12px' textAlign='end'>
          Đã nhận
        </Text>
      </Box>
    </Box>
  );
};

export default UserItem;
