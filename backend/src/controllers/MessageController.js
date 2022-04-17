import { MESSAGE_MESSAGE } from '../constants/messages/message.js';
import { ErrorResponse, SuccessResponse } from '../utils/responses/index.js';

class MessageController {
  constructor(service) {
    this.service = service;
  }

  /**
   * Send message
   * @route POST /api/v1/message/send
   */
  async send(req, res) {
    try {
      const { chatId, content } = req.body;

      if (!chatId || !content) {
        throw { statusCode: 400, message: MESSAGE_MESSAGE.miss_param };
      }

      const message = await this.service.send({
        chat: chatId,
        sender: req.user._id,
        content,
      });
      new SuccessResponse(res, 200, MESSAGE_MESSAGE.send_success, message);
    } catch (error) {
      new ErrorResponse(res, error.statusCode, error.message);
    }
  }
  /**
   * Get all message by chatId
   * @route GET /api/v1/message/:chatId
   */
  async getAllByChatId(req, res) {
    try {
      const { chatId } = req.params;

      if (!chatId) {
        throw { statusCode: 400, message: MESSAGE_MESSAGE.miss_param };
      }

      const messageAll = await this.service.getAllByChatId(chatId);
      new SuccessResponse(
        res,
        200,
        MESSAGE_MESSAGE.get_all_success,
        messageAll
      );
    } catch (error) {
      new ErrorResponse(res, error.statusCode, error.message);
    }
  }
}

export default MessageController;
