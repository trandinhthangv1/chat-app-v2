import React, { useState } from 'react';
import { Avatar, Box } from '@chakra-ui/react';
import UserItem from './UserItem';
import UserSearch from './UserSearch';

const UserList = () => {
  return (
    <Box minH='100%' bg='#fff' borderRadius={8} w='30%'>
      <Box d='flex' alignItems='center' p={5} pos='relative'>
        <Avatar
          name=''
          src='https://pro-theme.com/html/teamhost/assets/img/profile.png'
          size='sm'
        />
        <UserSearch />
      </Box>
      <Box
        maxH='calc(100vh - 250px)'
        overflowY='auto'
        className='custom-scrollbar'
      >
        {[1, 2, 3, 4, 4, 5, 6, 4, 4, 5, 6].map((item) => (
          <UserItem item={item} />
        ))}
      </Box>
    </Box>
  );
};

export default UserList;
