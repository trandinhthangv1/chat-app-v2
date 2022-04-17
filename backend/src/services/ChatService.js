import { CHAT_MESSAGE } from '../constants/messages/chat.js';
import Chat from '../models/Chat.js';
import User from '../models/User.js';

class ChatService {
  async access(user, userId) {
    if (!userId) {
      throw { statusCode: 400, message: CHAT_MESSAGE.miss_param };
    }

    const chats = await Chat.find({
      $and: [
        { users: { $elemMatch: { $eq: user._id } } },
        { users: { $elemMatch: { $eq: userId } } },
      ],
    }).populate('users', '-password');

    if (chats.length > 0) return chats[0];

    const newChat = await Chat.create({ users: [user._id, userId] });
    const fullChat = await Chat.findOne({ _id: newChat._id }).populate(
      'users',
      '-password'
    );
    return fullChat;
  }
  async fetchAll(user) {
    const allChat = await Chat.find({
      users: { $elemMatch: { $eq: user._id } },
    }).populate('users', '-password');
    return allChat;
  }
}

export default ChatService;
