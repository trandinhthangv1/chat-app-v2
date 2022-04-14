import {
  Avatar,
  AvatarBadge,
  Box,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineAudio, AiTwotonePhone } from 'react-icons/ai';
import { HiBell, HiVideoCamera } from 'react-icons/hi';
import { FiSend } from 'react-icons/fi';
import { IoIosSend, IoMdImages } from 'react-icons/io';
import { FaRegSmileWink } from 'react-icons/fa';

const MessageFooter = () => {
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
              onChange={() => console.log('hello2')}
            />
          </InputGroup>
        </Box>
      </Box>
    </Box>
  );
};

export default MessageFooter;
