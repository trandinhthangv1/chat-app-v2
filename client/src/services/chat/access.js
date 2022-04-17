import axios from 'axios';

import { CHAT_API } from '..';

async function access(id) {
  let data;
  const user = JSON.parse(localStorage.getItem('chat-app-user'));
  try {
    const res = await axios.post(
      `${CHAT_API}`,
      { userId: id },
      {
        headers: { Authorization: `Bearer ${user.token}` },
      }
    );
    data = res;
  } catch (error) {
    data = error.response;
  }
  return data;
}

export default access;
