import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from '@chakra-ui/react';
import { RiSearch2Line } from 'react-icons/ri';
import { AiTwotoneMessage } from 'react-icons/ai';

const UserSearch = () => {
  const [state, setState] = useState(false);
  return (
    <>
      <InputGroup ml={5}>
        <InputLeftElement
          pointerEvents='none'
          children={<Icon as={RiSearch2Line} color='#A0AEC0' />}
        />
        <Input
          placeholder='Tìm kiếm bạn bè'
          borderRadius={25}
          focusBorderColor='none'
          onFocus={() => setState(true)}
        />
      </InputGroup>
      <Box
        pos='absolute'
        top='80%'
        left={0}
        zIndex={1}
        w='100%'
        opacity={state ? '1' : '0'}
        h={state ? 'calc(100vh - 250px)' : '0'}
        transition='all 0.5s ease-in-out'
      >
        <Box
          bg='#fff'
          w='100%'
          h='100%'
          borderRadius={8}
          boxShadow='rgba(17, 17, 26, 0.1) 0px 0px 16px'
          overflowY='auto'
          className='custom-scrollbar'
        >
          {[1, 2, 3, 4, 4, 5, 6, 4, 4, 5, 6].map((item) => (
            <Box
              d='flex'
              justifyContent='space-between'
              mb={7}
              alignItems='center'
              cursor='pointer'
              m={3}
              _hover={{ bg: '#f5f5f5' }}
              borderRadius={8}
            >
              <Box d='flex' alignItems='center' m={2}>
                <Avatar
                  name=''
                  src='https://pro-theme.com/html/teamhost/assets/img/profile.png'
                  size='md'
                />
                <Box ml={2}>
                  <Text fontSize='md'>Ten</Text>
                  <Text fontSize='13px'>thang@gmail.com</Text>
                </Box>
              </Box>
              <Box>
                <Icon
                  as={AiTwotoneMessage}
                  w={4}
                  h={4}
                  color='#646464'
                  mr={2}
                />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default UserSearch;
