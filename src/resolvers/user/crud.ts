import { getConnection } from "typeorm";
import { User } from "./../../entity/User";
import { userErrorMessages } from "./../../utils/error/error.types";

export const userCrud = {
  createUser: async (_, args) => {
    const userAlreadyExists = await User.findOne({
      where: { name: args.name }
    });
    if (userAlreadyExists) {
      return {
        type: "already-exists",
        text: userErrorMessages.alreadyExists
      };
    }

    const createdUser = await User.create(args);
    await createdUser.save();
    return null;
  },

  deleteUser: async (_, { id }) => {
    try {
      await User.delete(id);
    } catch {
      return false;
    }
    return true;
  },

  updateUser: async (_, { id, update }) => {
    try {
      await User.update(id, { ...update });
    } catch (e) {
      return false;
    }
    return true;
  },
};
