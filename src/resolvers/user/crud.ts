import {
  alreadyExistsError,
  notDeletedError,
  notUpdatedError
} from "./user.errors";
import { User } from "./../../entity/User";
import { USER_ROLE } from "../../utils/constants/roles";

export const userCrud = {
  createUser: async (_, args, { session }) => {
    // console.log(context);

    const userAlreadyExists = await User.findOne({
      where: { name: args.name }
    });

    if (userAlreadyExists) {
      return alreadyExistsError;
    }

    const createdUser = await User.create(args);
    createdUser.role = USER_ROLE;
    await createdUser.save();

    session.user = {
      id: createdUser.id,
      name: createdUser.name,
      role: USER_ROLE
    };

    session.save();

    return null;
  },

  deleteUser: async (_, { id }) => {
    try {
      await User.delete(id);
    } catch {
      return notDeletedError;
    }
    return null;
  },

  updateUser: async (_, { id, update }) => {
    try {
      await User.update(id, { ...update });
    } catch (e) {
      return notUpdatedError;
    }
    return true;
  }
};
