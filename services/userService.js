import UserRepository from '../repositories/userRepository.js';

class UserService {
  static async getPaginatedUsers(page = 1, limit = 10) {
    const usersData = await UserRepository.getAllUsers(page, limit);
    const totalPages = Math.ceil(usersData.count / limit);
    return {
      totalPages,
      currentPage: page,
      users: usersData.rows,
    };
  }
}

export default UserService;
