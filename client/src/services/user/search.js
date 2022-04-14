import axios from 'axios';

import { ALL_USER_API } from '..';

async function search(search) {
  let data;
  const user = JSON.parse(localStorage.getItem('chat-app-user'));
  try {
    const res = await axios.get(`${ALL_USER_API}?search=${search}`, {
      headers: { Authorization: `Bearer ${user.token}` },
    });
    data = res;
  } catch (error) {
    data = error.response;
  }
  return data;
}

export default search;
