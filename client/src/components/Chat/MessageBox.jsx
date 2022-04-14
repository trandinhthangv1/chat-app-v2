import React from 'react';
import MessageHead from './MessageHead';
import MessageBody from './MessageBody';
import MessageFooter from './MessageFooter';
import { Box } from '@chakra-ui/react';

const MessageBox = () => {
  return (
    <Box
      minH='100%'
      bg='#fff'
      borderRadius={8}
      w='70%'
      ml={3}
      d='flex'
      flexDir='column'
    >
      <MessageHead />
      <MessageBody />
      <MessageFooter />
    </Box>
  );
};

export default MessageBox;
