// const ENDPOINT = 'https://vuichatchit.herokuapp.com';
// const SERVER_API = 'https://vuichatchit.herokuapp.com/api/v1';
const SERVER_API = 'http://localhost:3000/api/v1';
const ENDPOINT = 'http://localhost:3000';

const CLOUDINARY_API = 'https://api.cloudinary.com/v1_1';

const REGISTER_USER_API = SERVER_API + '/auth/register';
const LOGIN_USER_API = SERVER_API + '/auth/login';
const UPLOAD_PICTURE_API = CLOUDINARY_API + '/dlgi1yqxd/image/upload';
const ALL_USER_API = SERVER_API + '/user/all';
const CHAT_API = SERVER_API + '/chat';
const MESSAGE_API = SERVER_API + '/message';

export {
  ENDPOINT,
  SERVER_API,
  CLOUDINARY_API,
  REGISTER_USER_API,
  LOGIN_USER_API,
  UPLOAD_PICTURE_API,
  ALL_USER_API,
  CHAT_API,
  MESSAGE_API,
};
