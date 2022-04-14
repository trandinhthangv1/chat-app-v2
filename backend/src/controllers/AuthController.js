import { AUTH_MESSAGE } from '../constants/messages/auth.js';
import { ErrorResponse, SuccessResponse } from '../utils/responses/index.js';

class AuthController {
  constructor(service) {
    this.service = service;
  }

  /**
   * Register user
   * @public
   * @route POST api/v1/auth/register
   */
  async registerUser(req, res) {
    try {
      const { name, email, password } = req.body;

      if (!name || !email || !password) {
        throw { statusCode: 400, message: AUTH_MESSAGE.miss_info };
      }

      const user = await this.service.registerUser(req.body);
      new SuccessResponse(res, 201, AUTH_MESSAGE.create_success, user);
    } catch (error) {
      new ErrorResponse(res, error.statusCode, error.message);
    }
  }

  /**
   * Login user
   * @public
   * @route POST api/v1/auth/login
   */
  async login(req, res) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        throw { statusCode: 400, message: AUTH_MESSAGE.miss_info };
      }

      const userInfo = await this.service.login(email, password);

      new SuccessResponse(res, 200, AUTH_MESSAGE.login_success, userInfo);
    } catch (error) {
      new ErrorResponse(res, error.statusCode, error.message);
    }
  }
}

export default AuthController;
