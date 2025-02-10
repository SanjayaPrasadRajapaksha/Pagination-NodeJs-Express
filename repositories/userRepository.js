import User from '../models/user.js';

class UserRepository {
  static async getAllUsers(page, limit) {
    const offset = (page - 1) * limit;
    const users = await User.findAndCountAll({
      limit,
      offset,
    });
    return users;
  }
}

export default UserRepository;
