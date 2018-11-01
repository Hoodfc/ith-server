import { User } from '../../entity/User';

export const userQuery = {
  hello: () => "Hello",
  getAllUsers: () => User.find(),
  getUser: async (_, { name }) => {
    const user = await User.findOne({ where: { name } });
    return user;
  },
};
