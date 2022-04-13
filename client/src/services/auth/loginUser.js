import axios from 'axios';

import { LOGIN_USER_API } from '..';

const loginUser = async (values) => {
  let data;
  try {
    const res = await axios.post(LOGIN_USER_API, values);
    data = res;
  } catch (error) {
    data = error.response;
  }
  return data;
};

export default loginUser;
