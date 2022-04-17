import { CHAT_MESSAGE } from '../constants/messages/chat.js';
import { SuccessResponse } from '../utils/responses/Success.js';

class ChatController {
  constructor(service) {
    this.service = service;
  }

  /**
   * Access chat
   * @public
   * @route POST api/v1/chat
   */
  async access(req, res) {
    const { user, body } = req;
    const chat = await this.service.access(user, body.userId);
    new SuccessResponse(res, 200, CHAT_MESSAGE.access_success, chat);
  }

  /**
   * Fetch chat
   * @public
   * @route GET api/v1/chat
   */
  async fetch(req, res) {
    const allChat = await this.service.fetchAll(req.user);
    new SuccessResponse(res, 200, CHAT_MESSAGE.fetch_all_success, allChat);
  }
}

export default ChatController;
