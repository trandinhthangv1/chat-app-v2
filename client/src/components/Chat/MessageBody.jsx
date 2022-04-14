import ScrollableFeed from 'react-scrollable-feed';
import { Box, Button, Heading } from '@chakra-ui/react';
import React, { useState } from 'react';

const MessageBody = () => {
  const [state, setState] = useState([1]);
  return (
    <Box h='82%' d='flex' overflow='auto' w='100%'>
      <Box alignSelf='flex-end' w='100%'>
        <Box maxH='calc(100vh - 250px)' overflowY='hidden' mt={5}>
          <ScrollableFeed className='custom-scrollbar'>
            <Box mx={5} mt={20}>
              {state.map((item) => (
                <Box my={5}>
                  <Heading size='sm' textAlign={item === 1 ? 'end' : 'start'}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
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
