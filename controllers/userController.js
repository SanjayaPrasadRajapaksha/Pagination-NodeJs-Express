import UserService from '../services/userService.js';

class UserController {
  static async getUsers(req, res) {
    try {
      const { page = 1, limit = 10 } = req.query;
      const users = await UserService.getPaginatedUsers(Number(page), Number(limit));
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

export default UserController;
