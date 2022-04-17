import axios from 'axios';

import { CHAT_API } from '..';

async function fetchAll() {
  let data;
  const user = JSON.parse(localStorage.getItem('chat-app-user'));
  try {
    const res = await axios.get(CHAT_API, {
      headers: { Authorization: `Bearer ${user.token}` },
    });
    data = res;
  } catch (error) {
    data = error.response;
  }
  return data;
}

export default fetchAll;
