import { roleDeniedError } from "./errors";

export const hasRole = (next, _, { role }, { session }) => {
  if (role === session.user.role) {
    return next();
  }
  return roleDeniedError;
};
