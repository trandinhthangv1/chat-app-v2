import axios from 'axios';

import { REGISTER_USER_API } from '..';

const registerUser = async (information) => {
  let data;
  try {
    const res = await axios.post(REGISTER_USER_API, information);
    data = res;
  } catch (error) {
    data = error.response;
  }
  return data;
};

export default registerUser;
