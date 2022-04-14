import { Avatar, AvatarBadge, Box, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { AiTwotonePhone } from 'react-icons/ai';
import { HiBell, HiVideoCamera } from 'react-icons/hi';
import { RiMoreFill } from 'react-icons/ri';

const MessageHead = () => {
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
          <Avatar
            name=''
            src='https://pro-theme.com/html/teamhost/assets/img/profile.png'
            size='md'
          >
            <AvatarBadge boxSize='0.75em' bg='green' />
          </Avatar>
          <Box ml={3}>
            <Text fontWeight='bold'>Ten</Text>
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
