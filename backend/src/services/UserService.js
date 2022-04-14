import User from '../models/User.js';

class UserService {
  async getAllUser(user, search) {
    const keyword = search
      ? {
          $or: [
            { name: { $regex: search, $options: 'i' } },
            { email: { $regex: search, $options: 'i' } },
          ],
        }
      : {};

    const users = await User.find(keyword)
      .find({
        _id: { $ne: user._id },
      })
      .select('-password');

    return users;
  }
}

export default UserService;
