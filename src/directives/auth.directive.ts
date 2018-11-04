import { userErrorMessages } from "../utils/error/error.types";

export const hasRole = (next, source, { role }, { session }) => {
  if (role === session.user.role) {
    return next();
  }
  return {
    type: "permission-denied",
    text: userErrorMessages.roleDenied
  };
};
