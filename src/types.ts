export interface Context {
  data: Data;
  req: any;
  session: Session
}

export interface User {
  id: string;
  name: string;
  password: string;
  email: string;
  role: string;
}

export interface Error {
  type: string;
  text: string;
}

export interface Data {
  users: User[];
}

export interface Session {
  id: string,
  name: string,
  role: string
}

