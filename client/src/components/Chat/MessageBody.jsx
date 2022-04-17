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
                <Box my={5} key={message._id}>
                  <Heading
                    size='sm'
                    textAlign={
                      message.sender._id === user._id ? 'end' : 'start'
                    }
                  >
                    {message.content}
                  </Heading>
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
