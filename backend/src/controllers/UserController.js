import { USER_MESSAGE } from '../constants/messages/user.js';
import { SuccessResponse } from '../utils/responses/Success.js';

class UserController {
  constructor(service) {
    this.service = service;
  }

  /**
   * Get all user
   * @public
   * @route GET api/v1/user
   */
  async getAllUser(req, res) {
    const { user, query } = req;
    const users = await this.service.getAllUser(user, query.search);
    new SuccessResponse(res, 200, USER_MESSAGE.get_all_user_success, users);
  }
}

export default UserController;
