export interface Context {
  data: Data;
}

export interface User {
  id: string;
  name: string;
  password: string;
  email: string;
}

export interface Error {
  type: string;
  text: string;
}

export interface Data {
  users: User[];
}
