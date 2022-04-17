import axios from 'axios';

import { MESSAGE_API } from '..';

async function getAllMessageById(chatId) {
  let data;
  const user = JSON.parse(localStorage.getItem('chat-app-user'));
  try {
    const res = await axios.get(`${MESSAGE_API}/${chatId}`, {
      headers: { Authorization: `Bearer ${user.token}` },
    });
    data = res;
  } catch (error) {
    data = error.response;
  }
  return data;
}

export default getAllMessageById;
