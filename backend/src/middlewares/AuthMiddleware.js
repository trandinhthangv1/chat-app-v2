import jwt from 'jsonwebtoken';
import { MIDDLEWARE_MESSAGE } from '../constants/messages/middleware.js';
import User from '../models/User.js';
import { ErrorResponse } from '../utils/responses/Error.js';

class AuthMiddleware {
  async verifyToken(req, res, next) {
    try {
      const authHeader = req.header('Authorization');
      const token = authHeader && authHeader.split(' ')[1];

      if (!token) {
        throw { statusCode: 401, message: MIDDLEWARE_MESSAGE.not_found_token };
      }

      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      const user = await User.findById(decoded.userId).select('-password');

      req.user = user;
      next();
    } catch (error) {
      new ErrorResponse(res, error.statusCode, error.message);
    }
  }
}
export default AuthMiddleware;
