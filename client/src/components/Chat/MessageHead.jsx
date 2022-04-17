import React, { useContext } from 'react';
import { Avatar, AvatarBadge, Box, Icon, Text } from '@chakra-ui/react';
import { AiTwotonePhone } from 'react-icons/ai';
import { HiBell, HiVideoCamera } from 'react-icons/hi';
import { RiMoreFill } from 'react-icons/ri';
import { getSender } from '../../utils/userLogic';
import { ChatContext } from '../../context/ChatProvider';

const MessageHead = () => {
  const { user, selectedChat } = useContext(ChatContext);

  const friend = getSender(user, selectedChat.users);

  return (
    <Box h='8%' borderBottom='1px solid #e2e2e2'>
      <Box
        h='100%'
        d='flex'
        alignItems='center'
        justifyContent='space-between'
        mx={5}
      >
        <Box d='flex' alignItems='center'>
          <Avatar name={friend.name} src={friend.picture} size='md'>
            <AvatarBadge boxSize='0.75em' bg='green' />
          </Avatar>
          <Box ml={3}>
            <Text fontWeight='bold'>{friend.name}</Text>
            <Text fontSize='small'>Đang hoạt động</Text>
          </Box>
        </Box>
        <Box cursor='pointer' lineHeight={0}>
          <Icon as={AiTwotonePhone} w={6} h={6} color='#646464' mr={2} />
          <Icon as={HiVideoCamera} w={6} h={6} color='#646464' mr={2} />
          <Icon as={HiBell} w={6} h={6} color='#646464' mr={2} />
          <Icon as={RiMoreFill} w={6} h={6} color='#646464' />
        </Box>
      </Box>
    </Box>
  );
};

export default MessageHead;
