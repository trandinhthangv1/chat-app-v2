import Message from '../models/Message.js';
import User from '../models/User.js';

class MessageService {
  async send({ chat, sender, content }) {
    let message = await Message.create({ chat, sender, content });
    await message.populate([{ path: 'sender', select: 'name picture' }]);
    message = await User.populate(message, {
      path: 'chat.users',
      select: 'name picture email',
    });
    return message;
  }

  async getAllByChatId(chatId) {
    const messageAll = await Message.find({ chat: chatId })
      .populate('sender', 'name picture email')
      .populate('chat');

    return messageAll;
  }
}
export default MessageService;
