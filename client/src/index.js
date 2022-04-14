import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import theme from './themes';
import ChatProvider from './context/ChatProvider';

ReactDOM.render(
  <Router>
    <ChatProvider>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </ChatProvider>
  </Router>,
  document.getElementById('root')
);
