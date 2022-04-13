import {
  Avatar,
  Box,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { RiSearch2Line } from 'react-icons/ri';

const UserList = () => {
  return (
    <Box minH='100%' bg='#fff' borderRadius={8} w='30%'>
      <Box d='flex' alignItems='center' p={5}>
        <Avatar
          name=''
          src='https://pro-theme.com/html/teamhost/assets/img/profile.png'
          size='sm'
        />
        <InputGroup ml={5}>
          <InputLeftElement
            pointerEvents='none'
            children={<Icon as={RiSearch2Line} color='#A0AEC0' />}
          />
          <Input
            placeholder='Tìm kiếm bạn bè'
            borderRadius={25}
            focusBorderColor='none'
          />
        </InputGroup>
      </Box>
      <Box
        mt={5}
        maxH='calc(100vh - 250px)'
        overflowY='auto'
        className='custom-scrollbar'
        px={5}
      >
        {[1, 2, 3, 4, 4, 5, 6, 4, 4, 5, 6].map((item) => (
          <Box
            d='flex'
            justifyContent='space-between'
            mb={7}
            alignItems='center'
          >
            <Box d='flex' alignItems='center'>
              <Avatar
                name=''
                src='https://pro-theme.com/html/teamhost/assets/img/profile.png'
                size='md'
              />
              <Box>
                <Text>Ten</Text>
                <Text>Tin nhan moi nhat</Text>
              </Box>
            </Box>
            <Box>
              <Text>Date</Text>
              <Text>time</Text>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default UserList;
