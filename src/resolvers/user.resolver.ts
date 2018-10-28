import bcrypt from "bcrypt";
import { MutationResolvers, QueryResolvers } from "../generated/graphqlgen";
import { User } from "./../entity/User";
export const Query: QueryResolvers.Type = {
  hello: () => "Hello",
  getUser: async (_, { name }) => {
    const user = await User.findOne({ where: { name } });
    return user;
  },
  getAllUsers: () => User.find()
};

export const Mutation: MutationResolvers.Type = {
  createUser: async (_, args) => {
    const userAlreadyExists = await User.findOne({ where: { name : args.name }});
    if(userAlreadyExists) {
        throw Error("Error");
    }
    const createdUser = await User.create(args);
    await createdUser.save();
    return createdUser;
  }
};
