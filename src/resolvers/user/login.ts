import bcrypt from "bcrypt";
import { User } from "./../../entity/User";

const loginError = {
  type: "wrong-credentials",
  text: ""
};

export const userLogin = async (_, { name, password }, { session }) => {
  if(session.user){
    console.log("Already logged in");
  }
  const foundUser = await User.findOne({ where: { name } });
  if (!foundUser) {
    return loginError;
  }

  const validPassword = await bcrypt.compare(password, foundUser.password);

  if (!validPassword) {
    return loginError;
  }

  session.user = {
    id: foundUser.id,
    name: foundUser.name,
    role: foundUser.role
  };

  return null;
};
