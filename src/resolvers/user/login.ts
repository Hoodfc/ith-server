import { User } from "./../../entity/User";
import { wrongCredentialsError } from "./user.errors";
import bcrypt from "bcrypt";

export const userLogin = async (_, { name, password }, { session }) => {
  if (session.user) {
    console.log("Already logged in");
  }
  const foundUser = await User.findOne({ where: { name } });
  if (!foundUser) {
    return wrongCredentialsError;
  }

  const validPassword = await bcrypt.compare(password, foundUser.password);

  if (!validPassword) {
    return wrongCredentialsError;
  }

  session.user = {
    id: foundUser.id,
    name: foundUser.name,
    role: foundUser.role
  };

  return null;
};
