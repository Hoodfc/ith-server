export const alreadyExistsText = "A user with this user name already exists";
export const alreadyExistsError = {
  type: "already-exists",
  text: alreadyExistsText
};

export const notEmailText = "The field must be an email";
export const notEmailError = {
  type: "not-email",
  text: notEmailText
};

export const notDeletedText = "User could not be deleted";
export const notDeletedError = {
  type: "not-deleted",
  text: notDeletedText
};

export const notUpdatedText = "User could not be updated";
export const notUpdatedError = {
  type: "not-updated",
  text: notUpdatedText
};

export const wrongCredentialsText = "Wrong username or password";
export const wrongCredentialsError = {
  type: "wrong-credentials",
  text: wrongCredentialsText
};
