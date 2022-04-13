import axios from 'axios';

import { UPLOAD_PICTURE_API } from '..';

const uploadPicture = async (picture) => {
  let data;
  try {
    const res = axios.post(UPLOAD_PICTURE_API, picture);
    data = res;
  } catch (error) {
    data = error;
  }
  return data;
};

export default uploadPicture;
