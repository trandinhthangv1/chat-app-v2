import React from 'react';
import {
  Box,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { AiOutlineAudio } from 'react-icons/ai';
import { FaRegSmileWink } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { IoMdImages } from 'react-icons/io';

const MessageFooter = ({ newMessage, setNewMessage, sendMessage }) => {
  return (
    <Box h='10%' borderTop='1px solid #e2e2e2'>
      <Box
        h='100%'
        d='flex'
        alignItems='center'
        justifyContent='space-between'
        mx={5}
      >
        <Box cursor='pointer' lineHeight={0} d='flex'>
          <Icon as={FaRegSmileWink} w={6} h={6} color='#646464' mr={2} />
          <Icon as={IoMdImages} w={6} h={6} color='#646464' mr={2} />
          <Icon as={AiOutlineAudio} w={6} h={6} color='#646464' />
        </Box>
        <Box d='flex' alignItems='center' w='100%'>
          <InputGroup ml={5}>
            <InputRightElement
              cursor='pointer'
              onClick={() => console.log('hello1')}
              children={<Icon as={FiSend} color='#646464' w={6} h={6} />}
            />
            <Input
              placeholder='Nhập tin nhắn'
              borderRadius={25}
              focusBorderColor='none'
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={sendMessage}
            />
          </InputGroup>
        </Box>
      </Box>
    </Box>
  );
};

export default MessageFooter;
