import { User } from '../../entity/User';

export const userQuery = {
  hello: (_, __, { session }) => { 
   if(session.user) {
     return `You name is ${session.user.name}`
   }
   return `You should be logged in`;
  },
  getAllUsers: () => User.find(),
  getUser: async (_, { name }) => {
    const user = await User.findOne({ where: { name } });
    return user;
  },
};
