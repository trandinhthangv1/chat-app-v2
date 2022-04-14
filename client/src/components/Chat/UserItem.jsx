import React from 'react';
import { Avatar, Box, Text } from '@chakra-ui/react';

const UserItem = ({ item }) => {
  return (
    <Box
      d='flex'
      justifyContent='space-between'
      alignItems='center'
      _hover={{ bg: '#f5f5f5' }}
      borderRadius={8}
      mx={3}
      p={4}
      backgroundColor={item === 1 && '#f5f5f5'}
      my={1}
      cursor='pointer'
    >
      <Box d='flex' alignItems='center'>
        <Avatar
          name=''
          src='https://pro-theme.com/html/teamhost/assets/img/profile.png'
          size='md'
        />
        <Box ml={2}>
          <Text fontSize='md'>Ten</Text>
          <Text fontSize='13px'>Tin nhan moi nhat</Text>
        </Box>
      </Box>
      <Box>
        <Text fontSize='13px' textAlign='end'>
          7h
        </Text>
        <Text fontSize='12px' textAlign='end'>
          Đã nhận
        </Text>
      </Box>
    </Box>
  );
};

export default UserItem;
