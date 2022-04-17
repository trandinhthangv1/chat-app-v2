import React, { useContext } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import ScrollableFeed from 'react-scrollable-feed';
import { ChatContext } from '../../context/ChatProvider';

const MessageBody = ({ messages }) => {
  const { user } = useContext(ChatContext);
  return (
    <Box h='82%' d='flex' overflow='auto' w='100%'>
      <Box alignSelf='flex-end' w='100%'>
        <Box maxH='calc(100vh - 250px)' overflowY='hidden' mt={5}>
          <ScrollableFeed className='custom-scrollbar'>
            <Box mx={5} mt={20}>
              {messages.map((message) => (
                <Box
                  mb={2}
                  key={message._id}
                  d='flex'
                  justifyContent={
                    message.sender._id === user._id ? 'end' : 'start'
                  }
                >
                  <Box
                    d='inline-block'
                    bg={message.sender._id === user._id ? '#F46119' : '#f5f5f5'}
                    color={message.sender._id === user._id ? '#fff' : '#353535'}
                    px={3}
                    py={2}
                    borderRadius={20}
                  >
                    <Heading size='sm'>{message.content}</Heading>
                  </Box>
                </Box>
              ))}
            </Box>
          </ScrollableFeed>
        </Box>
      </Box>
    </Box>
  );
};

export default MessageBody;
