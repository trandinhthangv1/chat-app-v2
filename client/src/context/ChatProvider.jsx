import React, { createContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

export const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [user, setUser] = useState();
  const history = useHistory();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('chat-app-user'));
    setUser(userInfo);
    if (!userInfo) history.push('/');
  }, [history]);

  return (
    <ChatContext.Provider value={{ user, setUser }}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
