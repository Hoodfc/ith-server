import { User } from "./../../entity/User";
import { userErrorMessages } from "./../../utils/error/error.types";
import { USER_ROLE } from "./../../utils/roles";

export const userCrud = {
  createUser: async (_, args, { session }) => {
    // console.log(context);
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
    createdUser.role = USER_ROLE;
    await createdUser.save();

    session.user = {
      id: createdUser.id,
      name: createdUser.name,
      role: "USER"
    };

    console.log(session.user);

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
  }
};
