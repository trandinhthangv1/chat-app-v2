import argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import { AUTH_MESSAGE } from '../constants/messages/auth.js';
import User from '../models/User.js';

class AuthService {
  async registerUser(data) {
    const { name, email, password, picture } = data;
    const userExist = await User.findOne({ email });

    if (userExist) {
      throw { statusCode: 400, message: AUTH_MESSAGE.user_exist };
    }

    const hashPassword = await argon2.hash(password);

    const user = await User.create({
      name,
      email,
      picture,
      password: hashPassword,
    });

    return {
      _id: user._id,
      name: user.name,
      email: user.email,
      picture: user.picture,
    };
  }

  async login(email, password) {
    const user = await User.findOne({ email });

    if (!user) {
      throw { statusCode: 400, message: AUTH_MESSAGE.not_found_user };
    }

    const verifyPassword = await argon2.verify(user.password, password);

    if (!verifyPassword) {
      throw { statusCode: 400, message: AUTH_MESSAGE.invalid_info };
    }

    const accessToken = jwt.sign(
      { userId: user._id },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: '30d',
      }
    );

    return {
      _id: user._id,
      name: user.name,
      email: user.email,
      picture: user.picture,
      token: accessToken,
    };
  }
}

export default AuthService;
