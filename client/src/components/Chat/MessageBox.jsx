import React, { useContext, useEffect, useState } from 'react';
import { Box, Icon, Text } from '@chakra-ui/react';
import { IoLogoSnapchat } from 'react-icons/io';
import MessageHead from './MessageHead';
import MessageBody from './MessageBody';
import MessageFooter from './MessageFooter';
import sendMessageApi from '../../services/message/send';
import getAllMessageByIdApi from '../../services/message/getAllMessageById';
import { ChatContext } from '../../context/ChatProvider';

const MessageBox = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const { selectedChat } = useContext(ChatContext);

  useEffect(() => {
    if (!selectedChat) return;

    const getAllMessage = async () => {
      try {
        const { data, status } = await getAllMessageByIdApi(selectedChat._id);
        if (status === 200) {
          setMessages(data.data);
        }
      } catch (error) {
        console.log('error', error);
      }
    };
    getAllMessage();
  }, [selectedChat]);

  const sendMessage = async (event) => {
    if (!newMessage || event.key !== 'Enter') return;

    try {
      const { data, status } = await sendMessageApi({
        chatId: selectedChat._id,
        content: newMessage,
      });
      if (status === 200) {
        setNewMessage('');
        setMessages([...messages, data.data]);
      }
    } catch (error) {
      console.log('error', error);
    }
  };
  return (
    <Box
      minH='100%'
      bg='#fff'
      borderRadius={8}
      w='70%'
      ml={3}
      d='flex'
      flexDir='column'
    >
      {!selectedChat ? (
        <Box
          d='flex'
          justifyContent='center'
          alignItems='center'
          w='100%'
          h='100%'
        >
          <Text fontWeight='bold'>Trò chuyện cùng với mọi người! </Text>
          <Box animation='navspinv 2.4s infinite linear' ml={2}>
            <Icon as={IoLogoSnapchat} color='#f46119' />
          </Box>
        </Box>
      ) : (
        <>
          <MessageHead />
          <MessageBody messages={messages} />
          <MessageFooter
            newMessage={newMessage}
            setNewMessage={setNewMessage}
            sendMessage={sendMessage}
          />
        </>
      )}
    </Box>
  );
};

export default MessageBox;
