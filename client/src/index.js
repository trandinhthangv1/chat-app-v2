import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
ReactDOM.render(
  <Router>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </Router>,
  document.getElementById('root')
);
