import React, { useContext, useState } from 'react';
import {
  Avatar,
  Box,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Skeleton,
  Text,
} from '@chakra-ui/react';
import { RiSearch2Line } from 'react-icons/ri';
import { AiTwotoneMessage } from 'react-icons/ai';
import searchUserApi from '../../services/user/search';
import accessChatApi from '../../services/chat/access';
import { ChatContext } from '../../context/ChatProvider';

const UserSearch = () => {
  const [isHoverSearch, setHoverSearch] = useState(false);
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const { setSelectedChat, chats, setChats } = useContext(ChatContext);

  const handleSendSearch = async (event) => {
    if (event.key === 'Enter' && search) {
      try {
        setLoading(true);
        const { data, status } = await searchUserApi(search);
        setLoading(false);
        if (status === 200) {
          setSearchResult(data.data);
          return;
        }
      } catch (error) {
        console.log('error', error);
      }
    }
  };

  const handleClickItem = async (id) => {
    try {
      const { data, status } = await accessChatApi(id);
      if (status === 200) {
        const hasExistChat = chats.some((chat) => chat._id === data.data._id);
        if (!hasExistChat) {
          setChats([data.data, ...chats]);
        }
        setSelectedChat(data.data);
        setSearch('');
        setHoverSearch(false);
      }
    } catch (error) {
      console.log('error', error);
    }
  };

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
          onFocus={() => setHoverSearch(true)}
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          onKeyDown={handleSendSearch}
        />
      </InputGroup>
      <Box
        pos='absolute'
        top='80%'
        left={0}
        zIndex={1}
        w='100%'
        opacity={isHoverSearch ? '1' : '0'}
        h={isHoverSearch ? 'calc(100vh - 250px)' : '0'}
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
          {loading
            ? [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <Box key={item} borderRadius={8} m={3}>
                  <Skeleton height='70px' />
                </Box>
              ))
            : searchResult.map((user) => (
                <Box
                  d='flex'
                  justifyContent='space-between'
                  mb={7}
                  alignItems='center'
                  cursor='pointer'
                  m={3}
                  _hover={{ bg: '#f5f5f5' }}
                  borderRadius={8}
                  key={user._id}
                  onClick={() => handleClickItem(user._id)}
                >
                  <Box d='flex' alignItems='center' m={2}>
                    <Avatar name={user.name} src={user.picture} size='md' />
                    <Box ml={2}>
                      <Text fontSize='md'>{user.name}</Text>
                      <Text fontSize='13px'>{user.email}</Text>
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
