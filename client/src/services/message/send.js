import axios from 'axios';

import { MESSAGE_API } from '..';

async function send(info) {
  let data;
  const user = JSON.parse(localStorage.getItem('chat-app-user'));
  try {
    const res = await axios.post(`${MESSAGE_API}/send`, info, {
      headers: { Authorization: `Bearer ${user.token}` },
    });
    data = res;
  } catch (error) {
    data = error.response;
  }
  return data;
}

export default send;
